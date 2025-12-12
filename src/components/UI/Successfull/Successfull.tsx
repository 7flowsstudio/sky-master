import React from "react";
import s from "./Successfull.module.css";

type SuccesfullProps = {
	onClose: () => void;
};

const Successfull = ({ onClose }: SuccesfullProps) => {
	return (
		<div className={s.successfullWrapper}>
			<p className={s.text}>
				Our team will contact you to prepare for takeoff.
			</p>
			<button type="button" className={s.btnBack} onClick={() => onClose()}>
				back to home
				<div className={s.iconWrapper}>
					<svg className={s.icon}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</div>
			</button>
		</div>
	);
};

export default Successfull;
