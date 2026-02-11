"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./TestimonialsSwiper.module.css";
import { useTranslations } from "next-intl";
import TestSlideItem from "./TestSlideItem/TestSlideItem";
// import useOffsetBefore from "@/lib/useOffsetBefore/useOffsetBefore";

// const MIN_SLIDES = 8;
const Testimonials = () => {
  const t = useTranslations("Testimonials");
  // const offsetBefore = useOffsetBefore();

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

  // const slidesToRender = [...sliderList, ...sliderList];

  return (
    <div className={s.sliderContainer}>
      <div className={s.blurWrapper}>
        <Swiper
          className={s.swiper}
          loop={true}
          speed={800}
          slidesPerView={4}
          // loopAdditionalSlides={sliderList.length}
          // centeredSlides={false}
          // centeredSlidesBounds={false}
          // watchOverflow={true}

          spaceBetween={20}
          slidesPerGroup={1}
          // slidesOffsetBefore={-offsetBefore}
          // slidesOffsetBefore={0}
          // slidesOffsetAfter={0}
          navigation={{
            nextEl: ".test-next",
            prevEl: ".test-prev",
          }}
          modules={[Navigation, Pagination, Keyboard]}
          keyboard={{ enabled: true }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 4 },
            768: { slidesPerView: 3, spaceBetween: 12 },
            1280: { slidesPerView: 4, spaceBetween: 20 },
          }}
        >
          {sliderList.map((item) => (
            <SwiperSlide key={item.id} className={s.slide}>
              <TestSlideItem item={item} />
            </SwiperSlide>
          ))}
          <div className={s.rectangleBlure}></div>
        </Swiper>
      </div>
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
