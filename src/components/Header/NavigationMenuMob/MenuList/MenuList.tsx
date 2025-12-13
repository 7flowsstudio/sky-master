import React, { SetStateAction } from "react";
import { LocalizedScrollLink } from "../../LocalizedScrollLink/LocalizedScrollLink";
import { useTranslations } from "next-intl";
import { routing, Pathnames } from "@/i18n/routing"; // підлаштуй шлях імпорту
import s from "./MenuList.module.css";
import { useRouter } from "next/navigation";

type MenuListProps = {
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

type LinkData = {
	id: number;
	link: Pathnames | string;
	text: string;
};

// Виключаємо динамічні pathnames, які не можна передавати в href
type StaticPathnames = Exclude<Pathnames, "/programs/[id]">; // додай інші динамічні, якщо будуть

const STATIC_PATHNAMES_SET = Object.keys(routing.pathnames).filter(
	(p) => !p.includes("[")
) as StaticPathnames[];

/**
 * Повертає безпечний статичний шлях (StaticPathnames) або "/" як fallback.
 * Ми перевіряємо і runtime (в масиві STATIC_PATHNAMES_SET), і повертаємо тип-assertion
 * щоб TS не скаржився на можливий динамічний маршрут.
 */
const getHref = (link: string | Pathnames): StaticPathnames | "/" => {
	if (typeof link !== "string") {
		// якщо вже Pathnames — перетворимо в string для перевірки
		const l = link as string;
		if (
			!l.includes("[") &&
			STATIC_PATHNAMES_SET.includes(l as StaticPathnames)
		) {
			return l as StaticPathnames;
		}
		return "/";
	}

	if (link.startsWith("/")) {
		// якщо в маршруті є дужки - це динамічний маршрут — fallback
		if (link.includes("[")) return "/";
		// перевіряємо, чи є такий шлях у routing.pathnames (щоб уникнути опечаток)
		if (STATIC_PATHNAMES_SET.includes(link as StaticPathnames)) {
			return link as StaticPathnames;
		}
		// якщо немає у routing — fallback
		return "/";
	}

	// не сторінка — повертаємо "/" (щоб LocalizedScrollLink був на тій же сторінці і використовував scrollId)
	return "/";
};

const MenuList = ({ setOpenMenu }: MenuListProps) => {
	const t = useTranslations("MenuMobile");
	const router = useRouter();

	const linkDatas: LinkData[] = [
		{ id: 0, link: "/", text: t("0") },
		{ id: 1, link: "/programs", text: t("1") },
		{ id: 2, link: "corporate", text: t("2") },
		{ id: 3, link: "/fhfg-nonexistent", text: t("3") },
		{ id: 4, link: "/fhfg-nonexistent", text: t("4") },
	];

	return (
		<ul className={s.menuList}>
			{linkDatas.map((item) => {
				const isPageLink =
					typeof item.link === "string" && item.link.startsWith("/");

				// для “404” пунктів використовуємо client-side router.push
				const is404 = item.link === "/fhfg-nonexistent";

				return (
					<li key={item.id} className={s.menuItem}>
						{is404 ? (
							<button
								className={s.navMenuLink}
								onClick={() => {
									setOpenMenu(false);
									router.push(item.link);
								}}
							>
								{item.text}
							</button>
						) : (
							<LocalizedScrollLink
								href={getHref(item.link)}
								scrollId={!isPageLink ? item.link : undefined}
								className={s.navMenuLink}
								onClick={() => setOpenMenu(false)}
							>
								{item.text}
							</LocalizedScrollLink>
						)}
					</li>
				);
			})}
		</ul>
	);
};

export default MenuList;
