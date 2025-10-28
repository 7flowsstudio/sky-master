"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./TestimonialsSwiper.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Testimonials = () => {
	const t = useTranslations("Testimonials");

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
				slidesOffsetBefore={-170} // зсуває перший слайд вправо
				slidesOffsetAfter={0} // залишає місце для половини останнього
				navigation={{
					nextEl: ".test-next",
					prevEl: ".test-prev",
				}}
				modules={[Navigation, Pagination]}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 4 },
					768: { slidesPerView: 2, spaceBetween: 4 },
					1280: { slidesPerView: 4, spaceBetween: 20 },
				}}
			>
				{sliderList?.map((img, index) => (
					<SwiperSlide key={index} className={s.slide}>
						<div key={index} className={s.itemSlide}>
							<div className={s.itemContent}>
								<div className={s.info}>
									<Image
										src={img.img}
										width={44}
										height={44}
										alt={`user_` + (img.id + 1)}
									/>
									<div className={s.infoUser}>
										<h4 className={s.infoTitle}>{img.name}</h4>
										<p className={s.infoText}>{img.civil}</p>
									</div>
								</div>
								<div className={s.text}>{img.text}</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className={s.arrows}>
				<button className={`test-prev ${s.navButton} ${s.prevButton}`}>
					<svg className={`${s.navButton_icon} ${s.left}`}>
						<use href="/sprite.svg#icon-arrow-top-right"></use>
					</svg>
				</button>
				<button className={`test-next ${s.navButton} ${s.nextButton}`}>
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
