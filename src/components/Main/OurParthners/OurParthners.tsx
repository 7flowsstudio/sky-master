"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./OurParthners.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurParthners = () => {
	const [activeSlide, setActiveSlide] = useState<number | null>(null);
	const t = useTranslations("OurParthners");
	const listParthners = [
		{ id: 0, src: "/img/ourParthners/bfpg.png" },
		{ id: 1, src: "/img/ourParthners/ukrspecsystems.png" },
		{ id: 2, src: "/img/ourParthners/zsu.png" },
		{ id: 3, src: "/img/ourParthners/dji.png" },
		{ id: 4, src: "/img/ourParthners/dsnsuk.png" },
		{ id: 5, src: "/img/ourParthners/kernel.png" },
		{ id: 6, src: "/img/ourParthners/kpi.png" },
	];
	return (
		<div id="OurParthnersSwiper" className={s.ourParthnersSwiper}>
			<h3 className={s.ourParthnersTitle}>{t("title")}</h3>
			<div className={s.sliderContainer}>
				<Swiper
					className={s.ourParthnersList}
					// spaceBetween={20}
					// slidesPerView={1}
					// pagination={{ clickable: true }}
					navigation={{
						nextEl: ".parthners-next",
						prevEl: ".parthners-prev",
					}}
					modules={[Pagination, Navigation]}
					loop={true}
					slidesOffsetBefore={-20}
					slidesOffsetAfter={0}
					onSlideChange={(swiper) => {
						setActiveSlide(swiper.realIndex);
					}}
					breakpoints={{
						320: { slidesPerView: 4, spaceBetween: 30 },
						768: { slidesPerView: 5, spaceBetween: 60 },
						1280: { slidesPerView: 6, spaceBetween: 120 },
					}}
				>
					{listParthners?.map((item, index) => (
						<SwiperSlide key={index} className={s.slide}>
							<div key={index} className={s.ourParthnersItem}>
								<Image
									src={item.src}
									width={0}
									height={0}
									sizes="100vw"
									alt={`image` + item.id}
									className={s.imgParthners}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default OurParthners;
