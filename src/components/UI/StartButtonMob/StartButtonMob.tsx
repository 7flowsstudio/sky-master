"use client";
import React, { SetStateAction } from "react";
import s from "./StartButtonMob.module.css";
import { useTranslations } from "next-intl";

type StartTraningProps = {
	setOpenModal: React.Dispatch<SetStateAction<boolean>>;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

const StartButtonMob: React.FC<StartTraningProps> = ({
	setOpenModal,
	setOpenMenu,
}) => {
	const hundlerButton = () => {
		setOpenModal(true);
		setOpenMenu(false);
	};
	const t = useTranslations("");
	return (
		<button className={s.advBtn} onClick={hundlerButton}>
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
