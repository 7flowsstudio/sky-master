"use client";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import s from "./OurProgramsAnimate.module.css";
import ScrollStack from "./ScrollStack/ScrollStack";
import { useTranslations } from "next-intl";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";

const OurProgramsAnimate = () => {
	const t = useTranslations("OurPrograms");
	const { top, bottom } = useSizeWindows();

	const cardList = [
		{
			id: 0,
			src: "/img/ourPrograms/image_big_1.png",
			src_mob: "/img/ourPrograms/image_mob_1.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
		{
			id: 1,
			src: "/img/ourPrograms/image_big_2.png",
			src_mob: "/img/ourPrograms/image_mob_2.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
		{
			id: 2,
			src: "/img/ourPrograms/image_big_3.png",
			src_mob: "/img/ourPrograms/image_mob_3.png",
			title: t("cart_2.cart_name"),
			local: t("cart_2.local"),
			date: t("cart_2.date"),
			descr: t("cart_2.description_event"),
		},
	];

	return (
		<div className={s.ourPrograms}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.programsBlock}>
					<h5 className={s.programsSmallTitle}>{t("titleSection")}</h5>
					<div className={s.programsHeadTitle}>
						<h3 className={`${s.programsTitle} ${s.left}`}>
							<div className={s.rectangle}></div>
							{t("tite_1")}
						</h3>
						<h3 className={`${s.programsTitle} ${s.right}`}>{t("tite_2")}</h3>
					</div>
					<ScrollStack cardList={cardList} />
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default OurProgramsAnimate;
