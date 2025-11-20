"use client";
import React from "react";
import StartButton from "@/components/UI/StartButton/StartButton";
import Image from "next/image";
import s from "./TakeControlBlock.module.css";
import { useTranslations } from "next-intl";
import SplitText from "@/components/UI/SplitText/SplitText";

const TakeControlBlock = () => {
	const t = useTranslations("TakeControl");
	return (
		<div className={s.takeControlBlock}>
			<div className={s.takeControlLeft}>
				<div className={s.takeControlDescr}>
					<div className={s.title}>
						<h6 className={s.titleLitle}>{t("title_litle")}</h6>

						<h2 className={s.title_big}>
							<SplitText
								text={t("title_big")}
								className={s.title_big}
								delay={25}
								duration={0.1}
								ease="power3.out"
								splitType="chars"
								from={{ opacity: 0, y: 40 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.01}
								rootMargin="-100px"
								textAlign="left"
							/>
							{/* {t("title_big")} */}
						</h2>
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
