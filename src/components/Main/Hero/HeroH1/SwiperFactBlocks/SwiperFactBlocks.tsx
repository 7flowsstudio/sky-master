"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperFactBlocks.module.css";
import CastomPagination from "./CastomPagination/CastomPagination";
import { useTranslations } from "next-intl";

const SwiperFactBlocks = () => {
	const [activeSlide, setActiveSlide] = useState<number | null>(null);

	const t = useTranslations("Hero");

	const factInfo = [
		{ id: 0, stat: t("swiperFact.0.stat"), descr: t("swiperFact.0.descr") },
		{ id: 1, stat: t("swiperFact.1.stat"), descr: t("swiperFact.1.descr") },
		{ id: 2, stat: t("swiperFact.2.stat"), descr: t("swiperFact.2.descr") },
	];

	return (
		<div id="HeroSwiper" className={s.heroSwiper}>
			<div className={s.sliderContainer}>
				<Swiper
					className={s.swiper}
					// spaceBetween={20}
					// slidesPerView={1}
					// pagination={{ clickable: true }}
					navigation={{
						nextEl: ".hero-next",
						prevEl: ".hero-prev",
					}}
					modules={[Pagination, Navigation]}
					loop={true}
					onSlideChange={(swiper) => {
						setActiveSlide(swiper.realIndex);
					}}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 1 },
					}}
				>
					{factInfo?.map((item, index) => (
						<SwiperSlide key={index} className={s.slide}>
							<div key={index} className={s.heroItem}>
								<h4 className={s.heroSwiperTitle}>{item.stat}</h4>
								<h5 className={s.heroSwiperText}>{item.descr}</h5>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className={s.paginationBlock}>
				<CastomPagination info={factInfo} activeSlide={activeSlide} />
				{/* <button className={`hero-prev ${s.navButton} ${s.prevButton}`}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-left-errow"></use>
						</svg>
					</button>
					<button className={`hero-next ${s.navButton} ${s.nextButton}`}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-left-errow"></use>
						</svg>
					</button> */}
			</div>
		</div>
	);
};

export default SwiperFactBlocks;

{
	/* <div className={s.btnWrapper}>
				<button className={`custom-prev ${s.navButton} ${s.prevButton}`}>
					<svg className={s.navButton_icon}>
						<use href="/sprite.svg#icon-left-errow"></use>
					</svg>
				</button>
				<button className={`custom-next ${s.navButton} ${s.nextButton}`}>
					<svg className={`${s.navButton_icon} ${s.right}`}>
						<use href="/sprite.svg#icon-left-errow"></use>
					</svg>
				</button>
			</div> */
}
