"use client";
import React from "react";
import s from "./StartButton.module.css";
import { useTranslations } from "next-intl";

const StartButton = () => {
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

export default StartButton;
