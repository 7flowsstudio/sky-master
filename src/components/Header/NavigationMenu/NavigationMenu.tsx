import React from "react";
import { Link } from "@/i18n/routing";
import s from "./NavigationMenu.module.css";
import { useTranslations } from "next-intl";

const NavigationMenu = () => {
	const t = useTranslations("Header");
	const navList = [
		{ id: 0, name: t("menu.0"), link: "/programs" },
		{ id: 1, name: t("menu.1"), link: "/corporate" },
		{ id: 2, name: t("menu.2"), link: "/about" },
		{ id: 3, name: t("menu.3"), link: "/contacts" },
	] as const;
	return (
		<ul className={s.navigationList}>
			{navList.map((item, index) => (
				<li key={index} className={s.navigationItem}>
					<Link href={item.link} className={`${s.navItemLink} ${s.font}`}>
						{item.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default NavigationMenu;
