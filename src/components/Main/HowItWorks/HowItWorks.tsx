"use client";
import React from "react";
import s from "./HowItWorks.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import HowItWorksSwiper from "./HowItWorksSwiper/HowItWorksSwiper";

const HowItWorks = () => {
	const t = useTranslations("HowItWorks");
	const { top, bottom } = useSizeWindows();

	const cardLists = [
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

					<ul className={s.howItWorksCardsList}>
						{cardLists.map((item) => (
							<li key={item.id} className={s.howItWorksCardsItem}>
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
