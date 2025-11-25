"use client";
import React, { SetStateAction } from "react";
import s from "./StartButton.module.css";
import { useTranslations } from "next-intl";

type SetOpenModalProps = {
	setOpenModal: React.Dispatch<SetStateAction<boolean>>;
};

const StartButton: React.FC<SetOpenModalProps> = ({ setOpenModal }) => {
	const t = useTranslations("");
	return (
		<button className={s.advBtn} onClick={() => setOpenModal(true)}>
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
