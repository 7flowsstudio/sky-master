import React, { useEffect } from "react";
// import { Link, usePathname } from "@/i18n/routing";
import s from "./NavigationMenu.module.css";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { LocalizedScrollLinkCustom } from "@/lib/hooks/LocalizedScrollLinkCustom";

const NavigationMenu = () => {
	const t = useTranslations("Header");
	const navList = [
		{ id: 0, name: t("menu.0"), link: "/programs" },
		{ id: 1, name: t("menu.1"), link: "#Corporate" },
		{ id: 2, name: t("menu.2"), link: "/fhfg-nonexistent" },
		{ id: 3, name: t("menu.3"), link: "/fhfg-nonexistent" },
	] as const;

	const searchParams = useSearchParams();

	useEffect(() => {
		const scrollId = searchParams.get("scrollTo");
		if (scrollId) {
			const el = document.getElementById(scrollId);
			if (el) {
				setTimeout(() => {
					el.scrollIntoView({ behavior: "smooth" });
				}, 100); // невелика затримка для DOM
			}
		}
	}, [searchParams]);

	return (
		<ul className={s.navigationList}>
			{navList.map((item) => {
				const isScroll = item.link.startsWith("#Corporate");
				return (
					<li key={item.id} className={s.navigationItem}>
						{isScroll ? (
							<LocalizedScrollLinkCustom
								href="/"
								scrollId={item.link.slice(1)}
								className={`${s.navItemLink} ${s.font}`}
							>
								{item.name}
							</LocalizedScrollLinkCustom>
						) : (
							<a href={item.link} className={`${s.navItemLink} ${s.font}`}>
								{item.name}
							</a>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default NavigationMenu;
