import React from "react";
import s from "./FlightReadyAnswers.module.css";
import { useTranslations } from "next-intl";
import Accordion from "./Accordion/Accordion";

const FlightReadyAnswers = () => {
	const t = useTranslations("Faq");
	return (
		<div className={s.flightBlock}>
			<div className={s.titleH2}>
				<h6 className={s.titleSmall}>{t("title_small")}</h6>
				<h2 className={s.titleBig}>
					<div className={s.rectangle}></div>
					{t("title_big")}
				</h2>
			</div>
			<Accordion />
		</div>
	);
};

export default FlightReadyAnswers;
