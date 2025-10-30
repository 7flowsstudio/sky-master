"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./TestimonialsSwiper.module.css";
import { useTranslations } from "next-intl";
import TestSlideItem from "./TestSlideItem/TestSlideItem";
import useOffsetBefore from "@/lib/useOffsetBefore/useOffsetBefore";

const Testimonials = () => {
	const t = useTranslations("Testimonials");
	const offsetBefore = useOffsetBefore();

	const sliderList = [
		{
			id: 0,
			img: "/img/testimonials/elipse_1.png",
			name: t("slide_1.name"),
			civil: t("slide_1.civil"),
			text: t("slide_1.text"),
		},
		{
			id: 1,
			img: "/img/testimonials/elipse_2.png",
			name: t("slide_2.name"),
			civil: t("slide_2.civil"),
			text: t("slide_2.text"),
		},
		{
			id: 2,
			img: "/img/testimonials/elipse_3.png",
			name: t("slide_3.name"),
			civil: t("slide_3.civil"),
			text: t("slide_3.text"),
		},
		{
			id: 3,
			img: "/img/testimonials/elipse_4.png",
			name: t("slide_4.name"),
			civil: t("slide_4.civil"),
			text: t("slide_4.text"),
		},
		{
			id: 4,
			img: "/img/testimonials/elipse_5.png",
			name: t("slide_5.name"),
			civil: t("slide_5.civil"),
			text: t("slide_5.text"),
		},
	];

	return (
		<div className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				loop={true}
				slidesPerView={4}
				spaceBetween={20}
				slidesOffsetBefore={-offsetBefore}
				slidesOffsetAfter={0}
				navigation={{
					nextEl: ".test-next",
					prevEl: ".test-prev",
				}}
				modules={[Navigation, Pagination]}
				breakpoints={{
					320: { slidesPerView: 2, spaceBetween: 4 },
					768: { slidesPerView: 3, spaceBetween: 12 },
					1280: { slidesPerView: 4, spaceBetween: 20 },
				}}
			>
				{sliderList?.map((item, index) => (
					<SwiperSlide key={index} className={s.slide}>
						<TestSlideItem item={item} />
					</SwiperSlide>
				))}
				<div className={s.rectangleBlure}></div>
			</Swiper>
			<div className={s.arrows}>
				<button
					type="button"
					className={`test-prev ${s.navButton} ${s.prevButton}`}
				>
					<svg className={`${s.navButton_icon} ${s.left}`}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</button>
				<button
					type="button"
					className={`test-next ${s.navButton} ${s.nextButton}`}
				>
					<svg className={`${s.navButton_icon} ${s.right}`}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Testimonials;

{
}
