"use client";

import React, { useLayoutEffect, useRef, useCallback } from "react";
import s from "./HowItWorks.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import HowItWorksSwiper from "./HowItWorksSwiper/HowItWorksSwiper";

type CardItem = {
	id: number | string;
	count: string;
	title_1: string;
	title_2: string;
	description: string;
};

const HowItWorks = () => {
	const t = useTranslations("HowItWorks");
	const { top, bottom } = useSizeWindows();

	const cardLists: CardItem[] = [
		{
			id: 0,
			count: t("card_1.count"),
			title_1: t("card_1.title_1"),
			title_2: t("card_1.title_2"),
			description: t("card_1.description"),
		},
		{
			id: 1,
			count: t("card_2.count"),
			title_1: t("card_2.title_1"),
			title_2: t("card_2.title_2"),
			description: t("card_2.description"),
		},
		{
			id: 2,
			count: t("card_3.count"),
			title_1: t("card_3.title_1"),
			title_2: t("card_3.title_2"),
			description: t("card_3.description"),
		},
	];

	const listRef = useRef<HTMLUListElement | null>(null);
	const itemsRef = useRef<Array<HTMLLIElement | null>>([]);

	const setItemRef = useCallback(
		(index: number) => (el: HTMLLIElement | null) => {
			itemsRef.current[index] = el;
		},
		[]
	);

	// знайти найближчий скрол-кантейнер (включно з window)
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
			const items = itemsRef.current
				.slice(0, cardLists.length)
				.filter(Boolean) as HTMLLIElement[];
			if (!items.length) {
				ticking = false;
				return;
			}

			const viewportCenter = getViewportCenter(scrollParent);

			let closestIndex = -1;
			let closestDistance = Infinity;

			items.forEach((item, index) => {
				const rect = item.getBoundingClientRect();
				// якщо скрол контейнер не window, то rect порівнюємо з viewportCenter, який узятий від container.getBoundingClientRect()
				const itemCenter = rect.top + rect.height / 2;
				const distance = Math.abs(itemCenter - viewportCenter);

				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = index;
				}
			});

			items.forEach((item, index) => {
				item.classList.toggle(s.active, index === closestIndex);
			});

			ticking = false;
		};

		const scrollParent = findScrollParent(listRef.current ?? document.body);
		const scheduleCalc = () => {
			if (ticking) return;
			ticking = true;
			rafId = (window.requestAnimationFrame as typeof requestAnimationFrame)(
				() => calculateClosest(scrollParent)
			);
		};

		// Скрол/resize/поворот
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

		// ResizeObserver — реагує на динамічні зміни розміру/лейауту
		const ro = new ResizeObserver(() => scheduleCalc());
		// спостерігаємо за контейнером і за кожним item
		if (listRef.current) ro.observe(listRef.current);
		itemsRef.current.forEach((el) => {
			if (el) ro.observe(el);
		});

		// Слухаємо load на зображеннях (next/image генерує <img>)
		const imgs: HTMLImageElement[] = [];
		itemsRef.current.forEach((li) => {
			if (!li) return;
			const nodeImgs = Array.from(
				li.querySelectorAll("img")
			) as HTMLImageElement[];
			nodeImgs.forEach((img) => {
				imgs.push(img);
				if (!img.complete) img.addEventListener("load", scheduleCalc);
			});
		});

		// Стабілізація layout перед першим правильним розрахунком
		// два rAF + кілька setTimeout як запас
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				scheduleCalc();
				setTimeout(scheduleCalc, 50);
				setTimeout(scheduleCalc, 150);
			});
		});

		// очистка
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
			imgs.forEach((img) => img.removeEventListener("load", scheduleCalc));
		};
		// якщо змінюється кількість карток — перевстановлюємо спостерігачі
	}, [cardLists.length, setItemRef]);

	return (
		<div className={s.howItWorksWrapper}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.howItWorksBlock}>
					<div className={s.howTitleTop}>
						<h6 className={s.titleTopSmall}>{t("h6")}</h6>
						<div className={s.titleTopBigBlock}>
							<h2 className={`${s.titleTopBig} ${s.left}`}>{t("h2_1")}</h2>
							<h2 className={`${s.titleTopBig} ${s.right}`}>
								<div className={s.rectangle}></div>
								{t("h2_2")}
							</h2>
						</div>
					</div>

					<ul className={s.howItWorksCardsList} ref={listRef}>
						{cardLists.map((item, i) => (
							<li
								key={item.id}
								className={s.howItWorksCardsItem}
								ref={setItemRef(i)}
							>
								<div className={s.blockDescription}>
									<div className={s.blockH3}>
										<h3 className={s.titleTop}>{item.title_1}</h3>
										<h3 className={s.titleBottom}>{item.title_2}</h3>
									</div>
									<div className={s.description}>{item.description}</div>
								</div>
								<div className={s.blockCount}>
									<div className={s.countHead}>{item.count}</div>
								</div>
							</li>
						))}
					</ul>
					<HowItWorksSwiper cardLists={cardLists} />
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default HowItWorks;
