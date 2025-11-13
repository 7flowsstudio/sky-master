import React, { useState } from "react";
import s from "./Accordion.module.css";
import { useTranslations } from "next-intl";
import { accordionData } from "./accordionData";

const Accordion = () => {
	const [activeItem, setActiveItem] = useState<number | null>(null);
	const t = useTranslations("Faq");

	const accordionList = accordionData.map((item) => ({
		...item,
		question: t(item.questionKey),
		answer: t(item.answerKey),
	}));

	const hundleSubmit = (id: number) => {
		setActiveItem((prev) => (prev === id ? null : id));
	};

	return (
		<ul className={s.accordionList}>
			{accordionList.map((item) => (
				<li
					key={item.id}
					className={s.accordionItem}
					onClick={() => hundleSubmit(item.id)}
				>
					<div className={s.accordionAnswer}>
						<h4 className={s.questionTitle}>{item.question}</h4>
						<div className={s.accordionIconWrapper}>
							<svg className={s.accordionIcon}>
								<use href="/sprite.svg#icon-step"></use>
							</svg>
						</div>
					</div>
					<p
						className={`${s.answerText} ${
							activeItem === item.id ? s.open : ""
						}`}
					>
						{item.answer}
					</p>
				</li>
			))}
		</ul>
	);
};

export default Accordion;
