import { Link } from "@/i18n/routing";
import React from "react";
import s from "./Logo404.module.css";

const Logo404 = () => {
	return (
		<Link href="/" className={s.navLogo}>
			<svg className={`${s.navLogoIcon} ${s.leftIcon}`}>
				<use href="/sprite.svg#icon-symbol_logo"></use>
			</svg>
			<svg className={`${s.navLogoIcon} ${s.rightIcon}`}>
				<use href="/sprite.svg#icon-skymaster"></use>
			</svg>
		</Link>
	);
};

export default Logo404;
