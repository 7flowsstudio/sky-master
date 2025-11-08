"use client";
import React from "react";
import s from "./StartButton.module.css";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const StartButton = () => {
	const t = useTranslations("");
	return (
		<Link href="/training" className={s.advBtn}>
			{t("CTA_BTN")}
			<div className={s.iconWrapper}>
				<svg className={s.iconSkyMaster}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</Link>
	);
};

export default StartButton;
