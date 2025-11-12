"use client";
import React from "react";
import { useTranslations } from "next-intl";
import s from "./ContentSteps.module.css";
import Image from "next/image";
import { stepsData } from "./stepsData";
import { useScrollActiveItem } from "@/lib/hooks/useScrollActiveItem";
import { useItemsDistance } from "@/lib/hooks/useItemsDistance";
import useIsMobile from "@/lib/isMobile/isMobile";
import { useActiveDividerHeight } from "@/lib/hooks/useActiveDividerHeight";

const ContentSteps = () => {
	const t = useTranslations("TrainingRoadMap");
	const isMobile = useIsMobile();
	const stepsList = stepsData.map((item) => ({
		...item,
		step: t(item.stepKey),
		name: t(item.nameKey),
		date: item.listKeys.map((key) => t(key)),
	}));

	const { listRef, setItemRef } = useScrollActiveItem<
		HTMLUListElement,
		HTMLLIElement
	>(s.active);

	const dividerHeight = useItemsDistance(isMobile, listRef, s.stepSideItem);

	const activeDividerHeight = useActiveDividerHeight(listRef, dividerHeight);

	return (
		<div className={s.contentWrapper}>
			<div className={s.imageSide}>
				<Image
					src="/img/programs/training/video.webp"
					width={360}
					height={240}
					sizes="100vw"
					alt={`image_video`}
					className={s.imgVideo}
				/>
			</div>
			<ul className={s.stepsSideList} ref={listRef}>
				<div
					className={s.divider}
					style={{ height: `${dividerHeight}px` }}
				></div>
				<div
					className={s.activeDivider}
					style={{ height: `${activeDividerHeight}px` }}
				></div>
				{stepsList.map((item, i) => (
					<li key={item.id} className={s.stepSideItem} ref={setItemRef(i)}>
						<div className={s.stepIconWrapper}>
							<svg className={s.stepIcon}>
								<use href="/sprite.svg#icon-step"></use>
							</svg>
						</div>
						<h6 className={s.stepTitle}>{item.step}</h6>
						<h4 className={s.stepNameTitle}>{item.name}</h4>
						<ul className={s.itemList}>
							{item.date.map((i, idx) => (
								<li key={idx} className={s.stepItem}>
									<div className={s.iconWrapper}>
										<svg className={s.iconItem}>
											<use href="/sprite.svg#icon-list-item"></use>
										</svg>
									</div>
									{i}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContentSteps;
