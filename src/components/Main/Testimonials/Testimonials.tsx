"use client";
import React from "react";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import s from "./Testimonials.module.css";
import { useTranslations } from "next-intl";
import TestimonialsSwiper from "./TestimonialsSwiper/TestimonialsSwiper";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import SplitText from "@/components/UI/SplitText/SplitText";

const Testimonials = () => {
	const t = useTranslations("Testimonials");
	const { top, bottom } = useSizeWindows();

	const handleAnimationComplete = () => {
		console.log("All letters have animated!");
	};
	return (
		<div className={s.testimonials}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.testimonialsBlock}>
					<div className={s.titleSubtitle}>
						<div className={s.titleH2}>
							<h6 className={s.titleSmall}>{t("title_small")}</h6>
							<h2 className={s.titleBig}>
								<div className={s.rectangle}></div>
								<SplitText
									text={t("title_large")}
									className={s.titleBig}
									delay={100}
									duration={0.01}
									ease="power3.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="center"
									onLetterAnimationComplete={handleAnimationComplete}
								/>
								{/* {t("title_large")} */}
							</h2>
						</div>
						<div className={s.subTitleBlock}>
							<p className={s.subTitle}>{t("description")}</p>
						</div>
					</div>
					<TestimonialsSwiper />
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default Testimonials;
