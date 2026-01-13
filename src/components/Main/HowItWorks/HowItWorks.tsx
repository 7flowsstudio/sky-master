"use client";

import React from "react";
import s from "./HowItWorks.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import HowItWorksSwiper from "./HowItWorksSwiper/HowItWorksSwiper";
import { useScrollActiveList } from "@/lib/hooks/useScrollActiveList";
import SplitText from "@/components/UI/SplitText/SplitText";

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

	const { listRef, setItemRef } = useScrollActiveList(s.active, [
		cardLists.length,
	]);

	const handleAnimationComplete = () => {
		console.log("All letters have animated!");
	};

	return (
		<div className={s.howItWorksWrapper}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.howItWorksBlock}>
					<div className={s.howTitleTop}>
						<h6 className={s.titleTopSmall}>{t("h6")}</h6>
						<div className={s.titleTopBigBlock}>
							<h2 className={`${s.titleTopBig} ${s.left}`}>
								<SplitText
									text={t("h2_1")}
									className={`${s.titleTopBig} ${s.left}`}
									delay={100}
									duration={0.06}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.4}
									rootMargin="100px"
									textAlign="left"
									onLetterAnimationComplete={handleAnimationComplete}
								/>
								{/* {t("h2_1")} */}
							</h2>
							<h2 className={`${s.titleTopBig} ${s.right}`}>
								<div className={s.rectangle}></div>
								<SplitText
									text={t("h2_2")}
									className={`${s.titleTopBig} ${s.right}`}
									delay={100}
									duration={0.06}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.4}
									rootMargin="100px"
									textAlign="right"
									onLetterAnimationComplete={handleAnimationComplete}
								/>
								{/* {t("h2_2")} */}
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
