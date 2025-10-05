import React from "react";
import s from "./SkyMaster.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import StartButton from "@/components/UI/StartButton/StartButton";

const SkyMaster = () => {
	const t = useTranslations("Skymaster");
	const itemList = [
		{ id: 0, title: t("flight.item_1.title"), text: t("flight.item_1.text") },
		{ id: 1, title: t("flight.item_2.title"), text: t("flight.item_2.text") },
		{ id: 2, title: t("flight.item_3.title"), text: t("flight.item_3.text") },
		{ id: 3, title: t("flight.item_4.title"), text: t("flight.item_4.text") },
	];
	return (
		<div className={s.skymasterWrapper}>
			<WrapperForComponents paddingTop={124} paddingBottom={124}>
				<div className={s.skymasterBlock}>
					<div className={s.titleH2}>
						<h6 className={s.titleSmall}>{t("title_small")}</h6>
						<h2 className={s.titleBig}>{t("title_big")}</h2>
					</div>

					<div className={s.content}>
						<ul className={s.adventagesList}>
							{itemList.map((item) => (
								<li key={item.id} className={s.advItem}>
									<div className={s.advWrap}>
										<svg className={s.iconAdv}>
											<use
												href={`/sprite.svg#icon-skymaster-${item.id + 1}`}
											></use>
										</svg>
									</div>
									<div className={s.advDescr}>
										<h4 className={s.advTitle}>{item.title}</h4>
										<p className={s.advText}>{item.text}</p>
									</div>
								</li>
							))}
						</ul>
						<div className={s.imgAdventages}>
							<div className={s.imgDescr}>
								<h4 className={s.advTitle}>{t("flight_head.title")}</h4>
								<p className={s.advText}>{t("flight_head.text")}</p>
								<StartButton />
							</div>
						</div>
					</div>
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default SkyMaster;
