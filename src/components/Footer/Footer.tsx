"use client";
import React from "react";
import WrapperForComponents from "../UI/WrapperForComponents/WrapperForComponents";
import s from "./Footer.module.css";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { LocalizedScrollLink } from "../Header/LocalizedScrollLink/LocalizedScrollLink";
import { isValidRoute } from "@/lib/isValidRoute/isValidRoute";

const Footer = () => {
	const t = useTranslations("Footer");
	const pathname = usePathname();

	const is404 = pathname ? !isValidRoute(pathname) : false;

	if (is404) return null;

	return (
		<>
			{" "}
			<div className={s.footerWrapper}>
				<WrapperForComponents paddingTop={0} paddingBottom={24}>
					<div className={s.footerBlock}>
						<ul className={s.footerContentList}>
							<li className={`${s.footerContentItem} ${s.notDisplay}`}>
								<ul className={s.footerRightsList}>
									<li className={s.footerRightsItem}>
										<Link href="/">Privacy policy</Link>
									</li>
									<li className={s.footerRightsItem}>
										<Link href="/">cookie policy</Link>
									</li>
									<li className={s.footerRightsItem}>
										<Link href="/">terms & conditions</Link>
									</li>
								</ul>
							</li>
							<li className={s.footerImageItem}>
								{/* <Image
                  src="/img/footer/image.png"
                  width={654}
                  height={449}
                  quality={100}
                  alt="drone"
                  className={s.footerImg}
                /> */}
								<Image
									src="/img/footer/dronn.png"
									width={654}
									height={449}
									quality={100}
									alt="drone"
									className={s.footerImg}
								/>
							</li>
							<li className={s.footerContentItem}>
								<ul className={s.footerMenuList}>
									<li className={s.footerMenuItem}>
										{/* <LocalizedScrollLink href="/" scrollId="#Programs">
											{t("menu.0")}
										</LocalizedScrollLink> */}
										<Link href="/programs">{t("menu.0")}</Link>
										{/* <a href="#Programs">{t("menu.0")}</a> */}
									</li>
									<li className={s.footerMenuItem}>
										<LocalizedScrollLink href="/" scrollId="#Corporate">
											{t("menu.1")}
										</LocalizedScrollLink>
										{/* <a href="#Corporate">{t("menu.1")}</a> */}
									</li>
									<li className={s.footerMenuItem}>
										<LocalizedScrollLink href="/" scrollId="#About">
											{t("menu.2")}
										</LocalizedScrollLink>
										{/* <a href="#About">{t("menu.2")}</a> */}
									</li>
									<li className={s.footerMenuItem}>
										<LocalizedScrollLink href="/" scrollId="#Contacts">
											{t("menu.3")}
										</LocalizedScrollLink>
										{/* <a href="#Contacts">{t("menu.3")}</a> */}
									</li>

									<li className={`${s.footerMenuItem} ${s.displayMob}`}>
										<Link href="/">Privacy policy</Link>
									</li>
									<li className={`${s.footerMenuItem} ${s.displayMob}`}>
										<Link href="/">cookie policy</Link>
									</li>
									<li className={`${s.footerMenuItem} ${s.displayMob}`}>
										<Link href="/">terms & conditions</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</WrapperForComponents>
			</div>
			<div className={s.AllRights}>
				<Link href="/">
					<div className={s.footerLogo}>
						<svg className={`${s.logoIcon} ${s.leftIcon}`}>
							<use href="/sprite.svg#icon-symbol_logo"></use>
						</svg>
						<svg className={`${s.logoIcon} ${s.rightIcon}`}>
							<use href="/sprite.svg#icon-skymaster"></use>
						</svg>
					</div>
				</Link>

				<h6 className={s.textAllRights}>{t("rights")}</h6>
			</div>
		</>
	);
};

export default Footer;
