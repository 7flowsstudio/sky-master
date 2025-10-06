"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperGallery.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SwiperGallery = () => {
	const t = useTranslations("Gallery");

	const sliderList = [
		{
			id: 0,
			img: "/img/gallery/army_1.png",
			text: t("slider.0"),
		},
		{
			id: 1,
			img: "/img/gallery/army_2.png",
			text: t("slider.1"),
		},
		{
			id: 2,
			img: "/img/gallery/army_3.png",
			text: t("slider.2"),
		},
		{
			id: 3,
			img: "/img/gallery/army_4.png",
			text: t("slider.3"),
		},
		{
			id: 4,
			img: "/img/gallery/army_5.png",
			text: t("slider.4"),
		},
		{
			id: 5,
			img: "/img/gallery/army_6.png",
			text: t("slider.5"),
		},
	];

	return (
		<div className={s.sliderContainer}>
			<Swiper
				className={s.swiper}
				loop={true}
				slidesPerView={4}
				spaceBetween={20}
				slidesOffsetBefore={150} // зсуває перший слайд вправо
				slidesOffsetAfter={150} // залишає місце для половини останнього
				modules={[Navigation, Pagination]}
				// breakpoints={{
				// 	320: { slidesPerView: 2, spaceBetween: 20 },
				// 	768: { slidesPerView: 3, spaceBetween: 20 },
				// 	1280: { slidesPerView: 4, spaceBetween: 20 },
				// }}
			>
				{sliderList?.map((item, index) => (
					<SwiperSlide key={item.id} className={s.slide}>
						<div key={index} className={s.Item}>
							<div className={s.descr}>
								<div className={s.content}>
									<h4 className={s.contentCount}>
										{`0` + (item.id + 1) + `.`}
									</h4>
									<p className={s.contentText}>{item.text}</p>
								</div>
							</div>
							<Image
								src={item.img}
								width={326}
								height={325}
								alt={`item_` + item.id}
								quality={100}
								className={s.img}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SwiperGallery;
