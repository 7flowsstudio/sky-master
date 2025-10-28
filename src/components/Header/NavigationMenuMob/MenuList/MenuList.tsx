import React, { SetStateAction } from "react";
import { LocalizedScrollLink } from "../../LocalizedScrollLink/LocalizedScrollLink";
import { useTranslations } from "next-intl";
import s from "./MenuList.module.css";

type MenuListProps = {
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

type LinkData = {
	id: number;
	link: string;
	text: string;
};

const MenuList = ({ setOpenMenu }: MenuListProps) => {
	const t = useTranslations("MenuMobile");
	const linkDatas: LinkData[] = [
		{ id: 0, link: "Admin", text: t("0") },
		{ id: 1, link: "AboutMe", text: t("1") },
		{ id: 2, link: "BlogSwiper", text: t("2") },
		{ id: 3, link: "Barber", text: t("3") },
		{ id: 4, link: "Psychologist", text: t("4") },
	];
	return (
		<ul className={s.menuList}>
			{linkDatas.map((item) => (
				<li key={item.id} className={s.menuItem}>
					<LocalizedScrollLink
						href="/"
						scrollId={item.link}
						className={s.navMenuLink}
						onClick={() => setOpenMenu(false)}
					>
						{item.text}
					</LocalizedScrollLink>
				</li>
			))}
		</ul>
	);
};

export default MenuList;
