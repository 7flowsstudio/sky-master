import React, { ReactNode } from "react";
import s from "./ModalWrapper.module.css";

type ModalProps = {
	children: ReactNode;
	onClose: () => void;
};

const ModalWrapper = ({ children, onClose }: ModalProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h5 className={s.modalTitle}>Contact Form</h5>
				<button type="button" className={s.closeBtn} onClick={() => onClose()}>
					<svg className={s.closeBtnIcon}>
						<use href="/sprite.svg#icon-burger-close"></use>
					</svg>
				</button>
				{children}
			</div>
		</div>
	);
};

export default ModalWrapper;
