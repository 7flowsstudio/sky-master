"use client";
import React from "react";
import s from "./ProgramDetails.module.css";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TypeDroneProps } from "../TypeDrone";

const ProgramDetails: React.FC<TypeDroneProps> = ({ program }) => {
	const t = useTranslations("OurPrograms");
	return (
		<div className={s.programDetails}>
			<div className={s.descriptionSide}>
				<div className={s.top}>
					<h3 className={s.descrTitle}>{t("title_details")}</h3>
					<ul className={s.detailsList}>
						<li className={s.detailsItem}>
							<svg className={s.icon}>
								<use href="/sprite.svg#icon-teenyicons-location"></use>
							</svg>
							{t(program.localKey)}
						</li>
						<li className={s.detailsItem}>
							<svg className={s.icon}>
								<use href="/sprite.svg#icon-tdesign-calendar-filled"></use>
							</svg>
							{t(program.dateKey)}
						</li>
						<li className={s.detailsItem}>
							<svg className={s.icon}>
								<use href="/sprite.svg#icon-man"></use>
							</svg>
							{t("info")}
						</li>
					</ul>
				</div>
				<div className={s.bottom}>
					<p className={s.text}>{t(program.descrKey)}</p>
					<StartButton />
				</div>
			</div>
			<div className={s.imageSide}>
				<Image
					src="/img/programs/drones_types/programs_image.webp"
					width={355}
					height={268}
					alt="img_drone"
					className={s.image}
				/>
			</div>
		</div>
	);
};

export default ProgramDetails;
