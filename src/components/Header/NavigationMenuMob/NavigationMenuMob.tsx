"use client";
import { SetStateAction } from "react";
import s from "./NavigationMenuMob.module.css";
import Logo from "../Logo/Logo";
import BurgerButton from "../BurgerButton/BurgerButton";
import MenuList from "./MenuList/MenuList";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";
import StartButtonMob from "@/components/UI/StartButtonMob/StartButtonMob";

type MyComponentProps = {
	setOpenModal: React.Dispatch<SetStateAction<boolean>>;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
	openMenu: boolean;
};

export const NavigationMenuMob = ({
	setOpenMenu,
	openMenu,
	setOpenModal,
}: MyComponentProps) => {
	return (
		<div className={s.menuWrapper}>
			<div className={s.headerMenu}>
				<Logo />
				<BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
			</div>
			<div className={s.menuBody}>
				<MenuList setOpenMenu={setOpenMenu} />
				<LocaleSwitcher />
			</div>
			<StartButtonMob setOpenModal={setOpenModal} setOpenMenu={setOpenMenu} />
		</div>
	);
};
