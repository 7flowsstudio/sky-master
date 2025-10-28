import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import s from "./StartTrainingHero.module.css";

const StartTrainingHero = () => {
	const t = useTranslations("Header");
	return (
		<Link href="/training" className={`${s.navLinkBtn} ${s.font}`}>
			{t("link")}
			<div className={s.navLinkWrapper}>
				<svg className={s.navLinkIcon}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</Link>
	);
};

export default StartTrainingHero;
