"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./HowItWorksSwiper.module.css";
import SlideItem from "./SlideItem/SlideItem";

type HowItWorksProps = { cardLists: ItemProps[] };

export type ItemProps = {
	id: number;
	count: string;
	title_1: string;
	title_2: string;
	description: string;
};

const HowItWorksSwiper: React.FC<HowItWorksProps> = ({ cardLists }) => {
	return (
		<div id="HowItWorksSwiper" className={s.worksSwiper}>
			<div className={s.sliderContainer}>
				<Swiper
					className={s.swiper}
					navigation={{
						nextEl: ".howWorks-next",
						prevEl: ".howWorks-prev",
					}}
					modules={[Pagination, Navigation]}
					loop={true}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 4 },
					}}
				>
					{cardLists?.map((item, index) => (
						<SwiperSlide key={index} className={s.slide}>
							<SlideItem item={item} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className={s.paginationBlock}>
					<button className={`howWorks-prev ${s.navButton} ${s.prevButton}`}>
						<svg className={s.navButton_icon}>
							<use href="/sprite.svg#icon-arrow-top-right"></use>
						</svg>
					</button>
					<button className={`howWorks-next ${s.navButton} ${s.nextButton}`}>
						<svg className={`${s.navButton_icon} ${s.right}`}>
							<use href="/sprite.svg#icon-arrow-top-right"></use>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default HowItWorksSwiper;
