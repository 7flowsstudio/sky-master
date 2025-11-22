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
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import ContactsForm from "../UI/ContactsForm/ContactsForm";

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	const CloseModal = () => {
		setOpenModal(false);
	};

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
						<StartTraining setOpenModal={setOpenModal} />
					</div>
					<BurgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
				</nav>
			</WrapperForComponents>
			<div className={s.lineBottom}></div>
			<div className={`${s.menuHead} ${openMenu ? s.open : ""}`}>
				<NavigationMenuMob
					setOpenMenu={setOpenMenu}
					openMenu={openMenu}
					setOpenModal={setOpenModal}
				/>
			</div>
			{openModal && (
				<ModalWrapper onClose={CloseModal}>
					<ContactsForm onClose={CloseModal} />
				</ModalWrapper>
			)}
		</>
	);
};

export default Header;
