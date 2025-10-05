"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./TestimonialsSwiper.module.css";
import { useTranslations } from "next-intl";

const Testimonials = () => {
	const t = useTranslations("Testimonials");

	const sliderList = [
		{
			id: 0,
			img: "/",
			name: t("slide_1.name"),
			civil: t("slide_1.civil"),
			text: t("slide_1.text"),
		},
		{
			id: 1,
			img: "/",
			name: t("slide_2.name"),
			civil: t("slide_2.civil"),
			text: t("slide_2.text"),
		},
		{
			id: 2,
			img: "/",
			name: t("slide_3.name"),
			civil: t("slide_3.civil"),
			text: t("slide_3.text"),
		},
		{
			id: 3,
			img: "/",
			name: t("slide_4.name"),
			civil: t("slide_4.civil"),
			text: t("slide_4.text"),
		},
		{
			id: 4,
			img: "/",
			name: t("slide_5.name"),
			civil: t("slide_5.civil"),
			text: t("slide_5.text"),
		},
	];

	return (
		<div className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				centeredSlides={true}
				// spaceBetween={20}
				// slidesPerView={1}
				// pagination={{ clickable: true }}
				navigation={{
					nextEl: ".hero-next",
					prevEl: ".hero-prev",
				}}
				modules={[Pagination, Navigation]}
				loop={true}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 4 },
					768: { slidesPerView: 2, spaceBetween: 4 },
					1280: { slidesPerView: 4, spaceBetween: 20 },
				}}
			>
				{sliderList?.map((img, index) => (
					<SwiperSlide key={index} className={s.slide}>
						<div key={index} className={s.Item}>
							{index}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonials;

{
	/* <button className={`hero-prev ${s.navButton} ${s.prevButton}`}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-left-errow"></use>
						</svg>
					</button>
					<button className={`hero-next ${s.navButton} ${s.nextButton}`}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-left-errow"></use>
						</svg>
					</button> */
}
