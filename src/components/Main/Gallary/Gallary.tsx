"use client";
import React from "react";
import s from "./Gallary.module.css";
import { useTranslations } from "next-intl";
import SwiperGallery from "./SwiperGallery/SwiperGallery";
import SplitText from "@/components/UI/SplitText/SplitText";
import useIsMobile from "@/lib/isMobile/isMobile";

const Gallary = () => {
	const t = useTranslations("Gallery");
	const isMobile = useIsMobile();
	return (
		<div className={s.gallaryWrapper}>
			<div className={s.gallaryBlock}>
				<div className={s.titleH2}>
					<h6 className={s.titleSmall}>{t("title_small")}</h6>
					<div className={s.titleBig}>
						<h2 className={s.title_big_1}>
							<div className={s.rectangle}></div>
							<SplitText
								text={t("title_big_1")}
								className={s.title_big_1}
								delay={isMobile ? 20 : 100}
								duration={0.1}
								ease="bounce.out"
								splitType={isMobile ? "words" : "chars"}
								from={{ opacity: 0, y: 40 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.01}
								rootMargin="-100px"
								textAlign="left"
							/>
							{/* {t("title_big_1")} */}
						</h2>
						<h2 className={s.title_big_2}>
							<SplitText
								text={t("title_big_2")}
								className={s.title_big_2}
								delay={isMobile ? 20 : 100}
								duration={0.1}
								ease="bounce.out"
								splitType={isMobile ? "words" : "chars"}
								from={{ opacity: 0, y: 40 }}
								to={{ opacity: 1, y: 0 }}
								threshold={0.01}
								rootMargin="-100px"
								textAlign="left"
							/>
							{/* {t("title_big_2")} */}
						</h2>
					</div>
				</div>
				<div className={s.gallerySwiperWrapper}>
					<SwiperGallery />
				</div>
			</div>
		</div>
	);
};

export default Gallary;
