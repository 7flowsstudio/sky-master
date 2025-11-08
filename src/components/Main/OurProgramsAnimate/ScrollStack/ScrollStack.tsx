"use client";

import { useEffect, useRef } from "react";
import s from "./ScrollStack.module.css";
import Image from "next/image";
import useIsMobile from "@/lib/isMobile/isMobile";
import StartButton from "@/components/UI/StartButton/StartButton";

interface Card {
	id?: string | number;
	src: string;
	src_mob: string;
	title: string;
	local: string;
	date: string;
	descr: string;
}

interface ScrollStackProps {
	cardList: Card[];
	cardGap?: number; // відстань для "parking"
}

const ScrollStack = ({ cardList, cardGap = 20 }: ScrollStackProps) => {
	const containerRef = useRef<HTMLUListElement | null>(null);
	const isMobile = useIsMobile();

	// useEffect(() => {
	// 	const container = containerRef.current;
	// 	if (!container) return;

	// 	const cardElements = Array.from(
	// 		container.querySelectorAll(`.${s.card}`)
	// 	) as HTMLElement[];

	// 	const handleScroll = () => {
	// 		const windowHeight = window.innerHeight;

	// 		cardElements.forEach((card, index) => {
	// 			const cardInner = card.querySelector(`.${s.cardInner}`) as HTMLElement;
	// 			const cardRect = card.getBoundingClientRect();

	// 			// Прогрес скролу: 0 = старт, 1 = картка до "parking"
	// 			let progress = (windowHeight - cardRect.top - cardGap) / windowHeight;
	// 			progress = Math.min(Math.max(progress, 0), 1);

	// 			// Зменшення картки
	// 			const scale = 1 - progress * 0.12;

	// 			cardInner.style.transform = `scale(${scale}) translateY(${
	// 				progress * cardGap
	// 			}px)`;
	// 			cardInner.style.zIndex = `${1000 - index}`;
	// 			cardInner.style.filter = `brightness(${0.7 + progress * 0.3})`;
	// 		});
	// 	};

	// 	window.addEventListener("scroll", handleScroll);
	// 	handleScroll(); // одразу застосувати

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, [cardList, cardGap]);

	return (
		<ul className={s.programsCardList} ref={containerRef}>
			{cardList.map((item) => (
				<li key={item.id} className={s.card}>
					<div className={s.cardInner}>
						<Image
							src={isMobile ? item.src_mob : item.src}
							width={325}
							height={400}
							alt={`image` + item.id}
							className={s.programsImage}
						/>
						<div className={s.programsContent}>
							<div className={s.programsContentTop}>
								<h4 className={s.cardTitle}>{item.title}</h4>
								<div className={s.horizontSeparator}></div>
								<div className={s.programsInfo}>
									<svg className={s.cardIcon}>
										<use href="/sprite.svg#icon-teenyicons-location"></use>
									</svg>
									{item.local}
									<svg className={s.cardIcon}>
										<use href="sprite.svg#icon-slash"></use>
									</svg>
									<svg className={s.cardIcon}>
										<use href="/sprite.svg#icon-tdesign-calendar-filled"></use>
									</svg>
									{item.date}
								</div>
							</div>
							<div className={s.programsContentBottom}>
								<h4 className={s.cardDescription}>{item.descr}</h4>
								<div className={s.cardBtnBlock}>
									<StartButton />
								</div>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default ScrollStack;
