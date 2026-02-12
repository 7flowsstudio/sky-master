"use client";
import React, { useState } from "react";
import WrapperForComponents from "../UI/WrapperForComponents/WrapperForComponents";
import s from "./Header.module.css";
// import LocaleSwitcher from "./LocaleSwitcher/LocaleSwitcher";
import Logo from "./Logo/Logo";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import StartTraining from "./StartTraining/StartTraining";
import BurgerButton from "./BurgerButton/BurgerButton";
import { NavigationMenuMob } from "./NavigationMenuMob/NavigationMenuMob";
import ModalWrapper from "../UI/ModalWrapper/ModalWrapper";
import Successfull from "../UI/Successfull/Successfull";
import ContactsForm from "../UI/ContactsForm/ContactsForm";
import { usePathname } from "@/i18n/routing";
import { isValidRoute } from "@/lib/isValidRoute/isValidRoute";

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const [successfull, setSuccsessfull] = useState(false);

	const pathname = usePathname();
	const is404 = pathname ? !isValidRoute(pathname) : false;
	if (is404) return null;

	const CloseModal = () => {
		setOpenModal(false);
		setSuccsessfull(false);
	};

	return (
		<>
			<WrapperForComponents paddingTop={17} paddingBottom={15}>
				<nav className={s.navbar}>
					<Logo />
					<NavigationMenu />

					<div className={s.navigationLink}>
						{/* <div className={s.localSwitcher}>
							<LocaleSwitcher />
						</div> */}
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
				<ModalWrapper
					onClose={CloseModal}
					text={successfull ? "Message delivered." : "Contact Form"}
				>
					{successfull ? (
						<Successfull onClose={CloseModal} />
					) : (
						<ContactsForm successfull={setSuccsessfull} />
					)}
				</ModalWrapper>
			)}
		</>
	);
};

export default Header;
