import React, { ReactNode } from "react";
import s from "./ModalWrapper.module.css";

type ModalProps = {
	children: ReactNode;
	onClose: () => void;
	text?: string;
};

const ModalWrapper = ({ children, onClose, text }: ModalProps) => {
	return (
		<div className={s.wrapper}>
			<div className={s.content}>
				<h5 className={s.modalTitle}>{text}</h5>
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
