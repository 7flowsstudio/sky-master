"use client";
import React, { useState } from "react";
import WrapperForComponents from "../UI/WrapperForComponents/WrapperForComponents";
import s from "./Header.module.css";
import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import StartTraining from "./StartTraining/StartTraining";
import BurgerButton from "./BurgerButton/BurgerButton";
import { NavigationMenuMob } from "./NavigationMenuMob/NavigationMenuMob";

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	return (
		<>
			<WrapperForComponents paddingTop={17} paddingBottom={15}>
				<nav className={s.navbar}>
					<Logo />
					<NavigationMenu />

					<div className={s.navigationLink}>
						<div className={s.localSwitcher}>
							<LocaleSwitcher />
						</div>
						<StartTraining />
					</div>
					<BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
				</nav>
			</WrapperForComponents>
			<div className={s.lineBottom}></div>
			<div className={`${s.menuHead} ${openMenu ? s.open : ""}`}>
				<NavigationMenuMob setOpenMenu={setOpenMenu} openMenu={openMenu} />
			</div>
		</>
	);
};

export default Header;
