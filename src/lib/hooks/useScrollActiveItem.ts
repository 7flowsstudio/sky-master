import { useLayoutEffect, useRef, useCallback } from "react";

export function useScrollActiveItem<
	ListEl extends HTMLElement = HTMLUListElement,
	ItemEl extends HTMLElement = HTMLLIElement
>(activeClass: string) {
	const listRef = useRef<ListEl | null>(null);
	const itemsRef = useRef<Array<ItemEl | null>>([]);

	const setItemRef = useCallback(
		(index: number) => (el: ItemEl | null) => {
			itemsRef.current[index] = el;
		},
		[]
	);

	const findScrollParent = (node: Node | null): Window | HTMLElement => {
		let el = node as HTMLElement | null;
		while (el) {
			const style = getComputedStyle(el);
			const overflow = style.overflow + style.overflowY + style.overflowX;
			if (/(auto|scroll|overlay)/.test(overflow)) return el;
			el = el.parentElement;
		}
		return window;
	};

	useLayoutEffect(() => {
		let ticking = false;
		let rafId: number | null = null;

		const getViewportCenter = (scrollParent: Window | HTMLElement) => {
			if (scrollParent === window) return window.innerHeight / 2;
			const rect = (scrollParent as HTMLElement).getBoundingClientRect();
			return rect.top + rect.height / 2;
		};

		const calculateClosest = (scrollParent: Window | HTMLElement) => {
			const items = itemsRef.current.filter(Boolean) as ItemEl[];
			if (!items.length) {
				ticking = false;
				return;
			}

			const viewportCenter = getViewportCenter(scrollParent);

			let closestIndex = -1;
			let closestDistance = Infinity;

			items.forEach((item, index) => {
				const rect = item.getBoundingClientRect();
				const itemCenter = rect.top + rect.height / 2;
				const distance = Math.abs(itemCenter - viewportCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			items.forEach((item, index) => {
				item.classList.toggle(activeClass, index === closestIndex);
			});

			ticking = false;
		};

		const scrollParent = findScrollParent(listRef.current ?? document.body);
		const scheduleCalc = () => {
			if (ticking) return;
			ticking = true;
			rafId = requestAnimationFrame(() => calculateClosest(scrollParent));
		};

		const onScroll = () => scheduleCalc();
		const onResize = () => scheduleCalc();
		const onOrientation = () => scheduleCalc();

		if (scrollParent === window) {
			window.addEventListener("scroll", onScroll, { passive: true });
			window.addEventListener("resize", onResize);
			window.addEventListener("orientationchange", onOrientation);
		} else {
			(scrollParent as HTMLElement).addEventListener("scroll", onScroll, {
				passive: true,
			});
			window.addEventListener("resize", onResize);
			window.addEventListener("orientationchange", onOrientation);
		}

		const ro = new ResizeObserver(() => scheduleCalc());
		if (listRef.current) ro.observe(listRef.current);
		itemsRef.current.forEach((el) => el && ro.observe(el));

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				scheduleCalc();
				setTimeout(scheduleCalc, 50);
				setTimeout(scheduleCalc, 150);
			});
		});

		return () => {
			if (scrollParent === window) {
				window.removeEventListener("scroll", onScroll);
				window.removeEventListener("resize", onResize);
				window.removeEventListener("orientationchange", onOrientation);
			} else {
				(scrollParent as HTMLElement).removeEventListener("scroll", onScroll);
				window.removeEventListener("resize", onResize);
				window.removeEventListener("orientationchange", onOrientation);
			}
			if (rafId) cancelAnimationFrame(rafId);
			ro.disconnect();
		};
	}, [activeClass]);

	return { listRef, setItemRef };
}
