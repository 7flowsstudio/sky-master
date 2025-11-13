"use client";
import React from "react";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import s from "./TakeControlBlock.module.css";
import { useTranslations } from "next-intl";

const TakeControlBlock = () => {
	const t = useTranslations("TakeControl");
	return (
		<div className={s.takeControlBlock}>
			<div className={s.takeControlLeft}>
				<div className={s.takeControlDescr}>
					<div className={s.title}>
						<h6 className={s.titleLitle}>{t("title_litle")}</h6>
						<h2 className={s.title_big}>{t("title_big")}</h2>
					</div>
					<div className={s.takeControlBtn}>
						<StartButton />
					</div>
				</div>
			</div>
			<div className={s.takeControlRight}>
				<Image
					src="/img/takecontrol/photo_new.png"
					width={780}
					height={666}
					alt="soldier"
					className={s.soldier}
				/>
				<Image
					src="/img/takecontrol/photo_drone.png"
					width={780}
					height={666}
					alt="soldier"
					className={s.drone}
				/>
			</div>
		</div>
	);
};

export default TakeControlBlock;
