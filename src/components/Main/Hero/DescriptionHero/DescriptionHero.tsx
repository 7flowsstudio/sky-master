"use client";
import React from "react";
import s from "./DescriptionHero.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const DescriptionHero = () => {
	const t = useTranslations("Hero");
	return (
		<ul className={s.descriptionList}>
			<li className={s.descrText}>
				{t("descr_bottom_text_1")}
				<span>{t("descr_bottom_text_2")}</span>
			</li>
			<li className={s.descrBaner}>
				<Image
					src="/img/hero/soldier.png"
					width={136}
					height={136}
					alt="soldier_foto"
					className={s.imgBtn}
				/>
				<ul className={s.linkBtnList}>
					<li className={s.linkItem}>
						<div className={s.linkIconWrap}>
							<svg className={s.linkIcon}>
								<use href="/sprite.svg#icon-arrow-top-right"></use>
							</svg>
						</div>
					</li>
					<li className={s.linkText}>
						<h5 className={s.textBtn}>{t("text_btn_cta")}</h5>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default DescriptionHero;
