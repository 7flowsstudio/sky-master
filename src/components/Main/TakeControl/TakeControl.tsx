"use client";
import React from "react";
import s from "./TakeControl.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";

const TakeControl = () => {
	const t = useTranslations("TakeControl");
	const { top, bottom } = useSizeWindows();
	return (
		<div className={s.takeControlWrapper}>
			<WrapperForComponents paddingBottom={top} paddingTop={bottom}>
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
			</WrapperForComponents>
		</div>
	);
};

export default TakeControl;
