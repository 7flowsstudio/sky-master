import React from "react";
import s from "./Logo.module.css";

const Logo = () => {
	return (
		<div className={s.navLogo}>
			<svg className={`${s.navLogoIcon} ${s.leftIcon}`}>
				<use href="/sprite.svg#icon-symbol_logo"></use>
			</svg>
			<svg className={`${s.navLogoIcon} ${s.rightIcon}`}>
				<use href="/sprite.svg#icon-skymaster"></use>
			</svg>
		</div>
	);
};

export default Logo;
