"use client";
import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./OurParthners.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurParthners = () => {
  //   const [activeSlide, setActiveSlide] = useState<number | null>(null);
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

  const repeatedList = [...listParthners, ...listParthners];
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let scrollAmount = 0;

    const speed = 0.5;

    const animate = () => {
      if (!slider) return;

      scrollAmount += speed;
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={s.ourParthnersSwiper}>
      <h3 className={s.ourParthnersTitle}>{t("title")}</h3>
      <div className={s.sliderContainer}>
        <div className={s.sliderTrack}>
          {repeatedList.map((item, index) => (
            <div key={index} className={s.ourParthnersItem}>
              <Image
                src={item.src}
                width={120}
                height={34}
                alt={`image-${item.id}`}
                className={s.imgParthners}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurParthners;
