import React from "react";
import s from "./OurPrograms.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import Image from "next/image";
import StartButton from "@/components/UI/StartButton/StartButton";

const OurPrograms = () => {
	const t = useTranslations("OurPrograms");
	const cardList = [
		{
			id: 0,
			src: "/img/ourPrograms/image_big_1.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
		{
			id: 1,
			src: "/img/ourPrograms/image_big_2.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
		{
			id: 2,
			src: "/img/ourPrograms/image_big_3.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
	];
	return (
		<div className={s.ourPrograms}>
			<WrapperForComponents paddingTop={124} paddingBottom={124}>
				<div className={s.programsBlock}>
					<h5 className={s.programsSmallTitle}>{t("titleSection")}</h5>
					<div className={s.programsHeadTitle}>
						<h3 className={`${s.programsTitle} ${s.left}`}>{t("tite_1")}</h3>
						<h3 className={`${s.programsTitle} ${s.right}`}>{t("tite_2")}</h3>
					</div>
					<ul className={s.programsCardList}>
						{cardList.map((item) => (
							<li key={item.id} className={s.programsCard}>
								<Image
									src={item.src}
									width={325}
									height={400}
									alt={`image` + item.id}
									className={s.programsImage}
								/>
								<div className={s.programsContent}>
									<div className={s.programsContentTop}>
										<h4 className={s.cardTitle}>{item.title}</h4>
										<div className={s.horizontSeparator}></div>
										<div className={s.programsInfo}>
											<svg className={s.cardIcon}>
												<use href="/sprite.svg#icon-teenyicons-location"></use>
											</svg>
											{item.local}
											<svg className={s.cardIcon}>
												<use href="sprite.svg#icon-slash"></use>
											</svg>
											<svg className={s.cardIcon}>
												<use href="/sprite.svg#icon-tdesign-calendar-filled"></use>
											</svg>
											{item.date}
										</div>
									</div>
									<div className={s.programsContentBottom}>
										<h4 className={s.cardDescription}>{item.descr}</h4>
										<div className={s.cardBtnBlock}>
											<StartButton />
										</div>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default OurPrograms;
