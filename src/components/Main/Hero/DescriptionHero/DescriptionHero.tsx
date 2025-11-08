"use client";
import React, { useState } from "react";
import s from "./DescriptionHero.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import StartTrainingHero from "../StartTrainingHero/StartTrainingHero";

const DescriptionHero = () => {
	const [hover, setHover] = useState(false);
	const t = useTranslations("Hero");
	return (
		<ul className={s.descriptionList}>
			<li className={s.descrText}>
				{t("descr_bottom_text_1")}
				<span>{t("descr_bottom_text_2")}</span>
			</li>
			<li
				className={s.descrBaner}
				style={{ transform: hover ? "scale(1.02)" : "scale(1)" }}
			>
				<Image
					src="/img/hero/soldier.png"
					width={136}
					height={136}
					alt="soldier_foto"
					className={s.imgBtn}
				/>
				<ul className={s.linkBtnList}>
					<li className={s.linkItem}>
						<Link href="/programs">
							<div
								className={s.linkIconWrap}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
							>
								<svg className={s.linkIcon}>
									<use href="/sprite.svg#icon-arrow-top-right"></use>
								</svg>
							</div>
						</Link>
					</li>
					<li className={s.linkText}>
						<h5 className={s.textBtn}>{t("text_btn_cta")}</h5>
					</li>
				</ul>
			</li>
			<li className={s.descrBtn}>
				<StartTrainingHero />
			</li>
		</ul>
	);
};

export default DescriptionHero;
