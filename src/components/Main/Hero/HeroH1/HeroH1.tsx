import React from "react";
import s from "./HeroH1.module.css";
import SwiperFactBlocks from "./SwiperFactBlocks/SwiperFactBlocks";
import { useTranslations } from "next-intl";

const HeroH1 = () => {
	const t = useTranslations("Hero");
	return (
		<div className={s.hOneBlock}>
			<div className={s.heroWraperTitleH1}>
				<h1 className={s.heroTitle}>
					{t("title_h1")}
					<span>{t("title_h2")}</span>
				</h1>
				<div className={s.rectangleH1}></div>
				<div className={s.rectangleH1_1}></div>
			</div>
			<SwiperFactBlocks />
		</div>
	);
};

export default HeroH1;
