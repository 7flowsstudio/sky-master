import React from "react";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import s from "./Testimonials.module.css";
import { useTranslations } from "next-intl";
import TestimonialsSwiper from "./TestimonialsSwiper/TestimonialsSwiper";

const Testimonials = () => {
	const t = useTranslations("Testimonials");
	return (
		<div className={s.testimonials}>
			<WrapperForComponents paddingTop={124} paddingBottom={124}>
				<div className={s.testimonialsBlock}>
					<div className={s.titleSubtitle}>
						<div className={s.titleH2}>
							<h6 className={s.titleSmall}>{t("title_small")}</h6>
							<h2 className={s.titleBig}>{t("title_large")}</h2>
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
