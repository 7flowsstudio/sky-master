import { Link } from "@/i18n/routing";
import React from "react";
import s from "./StartButtonLink.module.css";

type Props = {
	id: string | number;
};

const StartButtonLink = ({ id }: Props) => {
	return (
		<Link
			href={{
				pathname: "/programs/[id]",
				params: { id: String(id) },
			}}
			className={s.link}
		>
			start training
			<div className={s.iconBlock}>
				<svg className={s.iconLink}>
					<use href="/sprite.svg#icon-arrow-top-right"></use>
				</svg>
			</div>
		</Link>
		// <Link href="/programs" className={s.link}>
		// 	see programs
		// 	<div className={s.iconBlock}>
		// 		<svg className={s.iconLink}>
		// 			<use href="/sprite.svg#icon-arrow-top-right"></use>
		// 		</svg>
		// 	</div>
		// </Link>
	);
};

export default StartButtonLink;
