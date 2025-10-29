import React from "react";
import { ItemProps } from "../HowItWorksSwiper";
import s from "./SlideItem.module.css";

type SlideItemProps = {
	item: ItemProps;
};

const SlideItem: React.FC<SlideItemProps> = ({ item }) => {
	return (
		<div className={s.slideWrapper}>
			<div className={s.sliderContent}>
				<div className={s.sliderCount}>
					<p>{item.count}</p>
				</div>
				<div className={s.sliderContentDescr}>
					<div className={s.sliderH3}>
						<h3 className={s.title}>{item.title_1}</h3>
						<h3 className={`${s.title} ${s.titleRight}`}>{item.title_2}</h3>
					</div>
					<div className={s.description}>{item.description}</div>
				</div>
			</div>
		</div>
	);
};

export default SlideItem;
