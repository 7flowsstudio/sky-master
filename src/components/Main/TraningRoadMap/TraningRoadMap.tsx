"use client";
import React from "react";
import s from "./TraningRoadMap.module.css";
import { useTranslations } from "next-intl";
import ContentSteps from "./ContentSteps/ContentSteps";

const TraningRoadMap = () => {
	const t = useTranslations("TrainingRoadMap");
	return (
		<div className={s.trainingBlock}>
			<div className={s.titleH2}>
				<h6 className={s.titleSmall}>{t("title_small")}</h6>
				<h2 className={s.titleBig}>
					<div className={s.rectangle}></div>
					{t("title_big")}
				</h2>
			</div>
			<ContentSteps />
		</div>
	);
};

export default TraningRoadMap;
