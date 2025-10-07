"use client";
import React from "react";
import WrapperForComponents from "../UI/WrapperForComponents/WrapperForComponents";
import s from "./Footer.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
	const t = useTranslations("Footer");
	return (
		<>
			{" "}
			<div className={s.footerWrapper}>
				<WrapperForComponents paddingTop={0} paddingBottom={24}>
					<div className={s.footerBlock}>
						<ul className={s.footerContentList}>
							<li className={s.footerContentItem}>
								<ul className={s.footerRightsList}>
									<li className={s.footerRightsItem}>Privacy policy</li>
									<li className={s.footerRightsItem}>cookie policy</li>
									<li className={s.footerRightsItem}>terms & conditions</li>
								</ul>
							</li>
							<li className={s.footerImageItem}>
								<Image
									src="/img/footer/image.png"
									width={654}
									height={449}
									quality={100}
									alt="drone"
									className={s.footerImg}
								/>
							</li>
							<li className={s.footerContentItem}>
								<ul className={s.footerMenuList}>
									<li className={s.footerMenuItem}>{t("menu.0")}</li>
									<li className={s.footerMenuItem}>{t("menu.1")}</li>
									<li className={s.footerMenuItem}>{t("menu.2")}</li>
									<li className={s.footerMenuItem}>{t("menu.3")}</li>
								</ul>
							</li>
						</ul>
					</div>
				</WrapperForComponents>
			</div>
			<div className={s.AllRights}>
				<div className={s.footerLogo}>
					<svg className={`${s.logoIcon} ${s.leftIcon}`}>
						<use href="/sprite.svg#icon-symbol_logo"></use>
					</svg>
					<svg className={`${s.logoIcon} ${s.rightIcon}`}>
						<use href="/sprite.svg#icon-skymaster"></use>
					</svg>
				</div>
				<h6 className={s.textAllRights}>{t("rights")}</h6>
			</div>
		</>
	);
};

export default Footer;
