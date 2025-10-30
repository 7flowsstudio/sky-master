import React from "react";
import Image from "next/image";
import s from "./TestSlideItem.module.css";

type TestProps = {
	item: ItemProps;
};
type ItemProps = {
	id: number;
	img: string;
	name: string;
	civil: string;
	text: string;
};

const TestSlideItem: React.FC<TestProps> = ({ item }) => {
	return (
		<div key={item.id} className={s.itemSlide}>
			<div className={s.itemContent}>
				<div className={s.info}>
					<Image
						src={item.img}
						width={44}
						height={44}
						alt={`user_` + (item.id + 1)}
					/>
					<div className={s.infoUser}>
						<h4 className={s.infoTitle}>{item.name}</h4>
						<p className={s.infoText}>{item.civil}</p>
					</div>
				</div>
				<div className={s.text}>{item.text}</div>
			</div>
		</div>
	);
};

export default TestSlideItem;
