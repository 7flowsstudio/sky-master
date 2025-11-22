import React, { SetStateAction } from "react";
import { useTranslations } from "next-intl";
import s from "./StartTraining.module.css";

type StartTraningProps = {
	setOpenModal: React.Dispatch<SetStateAction<boolean>>;
};

const StartTraining: React.FC<StartTraningProps> = ({ setOpenModal }) => {
	const t = useTranslations("Header");
	return (
		<button
			className={`${s.navLinkBtn} ${s.font}`}
			onClick={() => setOpenModal(true)}
		>
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
