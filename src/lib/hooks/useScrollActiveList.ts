"use client";
import { useLayoutEffect, useRef, useCallback } from "react";

export const useScrollActiveList = (
	activeClass: string,
	dependencies: unknown[] = []
) => {
	const listRef = useRef<HTMLUListElement | null>(null);
	const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

	const setItemRef = useCallback(
		(index: number) => (el: HTMLLIElement | null) => {
			itemsRef.current[index] = el;
		},
		[]
	);

	// знайти найближчий скрол-контейнер
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

		const getViewportCenter = (scrollParent: Window | HTMLElement) =>
			scrollParent === window
				? window.innerHeight / 2
				: (scrollParent as HTMLElement).getBoundingClientRect().top +
				  (scrollParent as HTMLElement).getBoundingClientRect().height / 2;

		const calculateClosest = (scrollParent: Window | HTMLElement) => {
			const items = itemsRef.current.filter(Boolean) as HTMLLIElement[];
			if (!items.length) {
				ticking = false;
				return;
			}

			const viewportCenter = getViewportCenter(scrollParent);
			let closestIndex = -1;
			let closestDistance = Infinity;

			items.forEach((item, index) => {
				const rect = item.getBoundingClientRect();
				const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
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

		const events = [
			["scroll", scheduleCalc],
			["resize", scheduleCalc],
			["orientationchange", scheduleCalc],
		] as const;

		events.forEach(([ev, fn]) =>
			(scrollParent === window ? window : scrollParent).addEventListener(
				ev,
				fn,
				{ passive: true }
			)
		);

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
			events.forEach(([ev, fn]) =>
				(scrollParent === window ? window : scrollParent).removeEventListener(
					ev,
					fn as EventListener
				)
			);
			if (rafId) cancelAnimationFrame(rafId);
			ro.disconnect();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, dependencies);

	return { listRef, setItemRef };
};
