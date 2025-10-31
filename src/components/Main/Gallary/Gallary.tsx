"use client";
import React from "react";
import s from "./Gallary.module.css";
import { useTranslations } from "next-intl";
import SwiperGallery from "./SwiperGallery/SwiperGallery";

const Gallary = () => {
	const t = useTranslations("Gallery");
	return (
		<div className={s.gallaryWrapper}>
			<div className={s.gallaryBlock}>
				<div className={s.titleH2}>
					<h6 className={s.titleSmall}>{t("title_small")}</h6>
					<div className={s.titleBig}>
						<h2 className={s.title_big_1}>
							<div className={s.rectangle}></div>
							{t("title_big_1")}
						</h2>
						<h2 className={s.title_big_2}>{t("title_big_2")}</h2>
					</div>
				</div>
				<div className={s.gallerySwiperWrapper}>
					<SwiperGallery />
				</div>
			</div>
		</div>
	);
};

export default Gallary;
