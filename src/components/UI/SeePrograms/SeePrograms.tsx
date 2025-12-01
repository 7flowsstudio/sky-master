import React from "react";
import s from "./SeePrograms.module.css";
import { Link } from "@/i18n/routing";

const SeePrograms = () => {
	return (
		<Link href="/programs" className={s.link}>
			see programs
			<div className={s.iconBlock}>
				<svg className={s.iconLink}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</Link>
	);
};

export default SeePrograms;
