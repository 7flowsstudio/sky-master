"use client";
import React from "react";
import s from "./StartButtonMob.module.css";
import { useTranslations } from "next-intl";

const StartButtonMob = () => {
	const t = useTranslations("");
	return (
		<button className={s.advBtn}>
			{t("CTA_BTN")}
			<div className={s.iconWrapper}>
				<svg className={s.iconSkyMaster}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</button>
	);
};

export default StartButtonMob;
