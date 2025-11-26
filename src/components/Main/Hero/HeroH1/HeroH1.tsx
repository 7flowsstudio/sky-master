import React from "react";
import s from "./HeroH1.module.css";
import SwiperFactBlocks from "./SwiperFactBlocks/SwiperFactBlocks";
import { useTranslations } from "next-intl";
import SplitText from "@/components/UI/SplitText/SplitText";
import useScrollAnimation from "@/lib/hooks/useScrollAnimation";

const HeroH1 = () => {
	const [heroTextRef, heroTextVisible] = useScrollAnimation() as [
		React.RefObject<HTMLDivElement>,
		boolean
	];
	const t = useTranslations("Hero");
	return (
		<div className={s.hOneBlock}>
			<div className={s.heroWraperTitleH1}>
				<h1 className={s.heroTitle}>
					<SplitText
						text={t("title_h1")}
						className={s.heroTitle}
						delay={500}
						duration={0.3}
						ease="power3.out"
						splitType="words"
						from={{ opacity: 0, y: 50 }}
						to={{ opacity: 1, y: 0 }}
						threshold={0.01}
						rootMargin="-100px"
						textAlign="left"
					/>
					{/* {t("title_h1")} */}
					<span
						ref={heroTextRef}
						className={`${s.heroText} ${s.animateText} ${
							heroTextVisible ? s.visible : ""
						}`}
					>
						{t("title_h2")}
					</span>
				</h1>
				<div className={s.rectangleH1}></div>
				<div className={s.rectangleH1_1}></div>
			</div>
			<SwiperFactBlocks />
		</div>
	);
};

export default HeroH1;
