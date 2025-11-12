import React from "react";
import { useTranslations } from "next-intl";
import s from "./StartTraining.module.css";

const StartTraining = () => {
	const t = useTranslations("Header");
	return (
		<button className={`${s.navLinkBtn} ${s.font}`}>
			{t("link")}
			<div className={s.navLinkWrapper}>
				<svg className={s.navLinkIcon}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</button>
	);
};

export default StartTraining;
