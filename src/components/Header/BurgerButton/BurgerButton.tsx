import React, { SetStateAction } from "react";
import s from "./BurgerButton.module.css";

type BurgerProps = {
	openMenu: boolean;
	setOpenMenu: React.Dispatch<SetStateAction<boolean>>;
};

const BurgerButton: React.FC<BurgerProps> = ({ openMenu, setOpenMenu }) => {
	return (
		<div
			className={s.burgerWrapper}
			onClick={() => setOpenMenu((prev) => !prev)}
		>
			<svg className={s.iconBurger}>
				<use
					href={`/sprite.svg#${
						openMenu ? "icon-burger-close" : "icon-burger-menu"
					}`}
				/>
			</svg>
		</div>
	);
};

export default BurgerButton;
