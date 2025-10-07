"use client";
import React from "react";
import WrapperForComponents from "../UI/WrapperForComponents/WrapperForComponents";
import s from "./Header.module.css";
import { useTranslations } from "next-intl";
import { Link, Pathnames } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";

const Header = () => {
	const t = useTranslations("Header");

	const navList: { id: number; name: string; link: Pathnames }[] = [
		{ id: 0, name: t("menu.0"), link: "/programs" },
		{ id: 1, name: t("menu.1"), link: "/corporate" },
		{ id: 2, name: t("menu.2"), link: "/about" },
		{ id: 3, name: t("menu.3"), link: "/contacts" },
	];
	return (
		<>
			<WrapperForComponents paddingTop={17} paddingBottom={15}>
				<nav className={s.navbar}>
					<div className={s.navLogo}>
						<svg className={`${s.navLogoIcon} ${s.leftIcon}`}>
							<use href="/sprite.svg#icon-symbol_logo"></use>
						</svg>
						<svg className={`${s.navLogoIcon} ${s.rightIcon}`}>
							<use href="/sprite.svg#icon-skymaster"></use>
						</svg>
					</div>
					<ul className={s.navigationList}>
						{navList.map((item, index) => (
							<li key={index} className={s.navigationItem}>
								<Link href={item.link} className={`${s.navItemLink} ${s.font}`}>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
					<div className={s.navigationLink}>
						<div className={s.localSwitcher}>
							<LocaleSwitcher />
						</div>
						<Link href="/training" className={`${s.navLinkBtn} ${s.font}`}>
							{t("link")}
							<div className={s.navLinkWrapper}>
								<svg className={s.navLinkIcon}>
									<use href="/sprite.svg#icon-arrow-top-right"></use>
								</svg>
							</div>
						</Link>
					</div>
				</nav>
			</WrapperForComponents>
			<div className={s.lineBottom}></div>
		</>
	);
};

export default Header;
