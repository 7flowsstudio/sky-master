"use client";
import React from "react";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import s from "./Testimonials.module.css";
import { useTranslations } from "next-intl";
import TestimonialsSwiper from "./TestimonialsSwiper/TestimonialsSwiper";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";

const Testimonials = () => {
	const t = useTranslations("Testimonials");
	const { top, bottom } = useSizeWindows();
	return (
		<div className={s.testimonials}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.testimonialsBlock}>
					<div className={s.titleSubtitle}>
						<div className={s.titleH2}>
							<h6 className={s.titleSmall}>{t("title_small")}</h6>
							<h2 className={s.titleBig}>
								<div className={s.rectangle}></div>
								{t("title_large")}
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
