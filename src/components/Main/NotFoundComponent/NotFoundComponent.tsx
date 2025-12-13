"use client";
import React from "react";
import s from "./NotFoundComponent.module.css";
import Logo404 from "./Logo404/Logo404";
import { useRouter } from "@/i18n/routing";

const NotFoundComponent = () => {
	const router = useRouter();
	return (
		<div className={s.wrapper}>
			<div className={s.logo}>
				<Logo404 />
			</div>
			<div className={s.errorWrapper}>
				<div className={s.error}>
					<h5 className={s.textError}>404</h5>
					<div className={s.rectangle}></div>
				</div>
				<div className={s.blockDescription}>
					<h4 className={s.title}>Page Not Found</h4>
					<p className={s.text}>Target does not exist. Return to base.</p>
					<button
						type="button"
						className={s.btn}
						onClick={() => router.push("/")}
					>
						Go home
						<div className={s.blockIcon}>
							<svg className={s.icon}>
								<use href="/sprite.svg#icon-arrow-top-right"></use>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFoundComponent;
