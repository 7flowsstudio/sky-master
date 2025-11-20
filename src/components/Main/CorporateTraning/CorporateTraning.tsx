"use client";
import React from "react";
import s from "./CorporateTraning.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import { useTranslations } from "next-intl";
import { Link, Pathnames } from "@/i18n/routing";
import Image from "next/image";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import SplitText from "@/components/UI/SplitText/SplitText";

const CorporateTraning = () => {
	const t = useTranslations("CorparateTraning");
	const { top, bottom } = useSizeWindows();

	type StaticPathnames = Exclude<Pathnames, "/programs/[id]">;

	const programsList = [
		{
			id: 0,
			type: t("type.0"),
			link: "/fpv_basic",
			src: "/img/programs/Image_1.png",
		},
		{
			id: 1,
			type: t("type.1"),
			link: "/tactical_start",
			src: "/img/programs/Image_2.png",
		},
		{
			id: 2,
			type: t("type.2"),
			link: "/night_ops",
			src: "/img/programs/Image_3.png",
		},
		{
			id: 3,
			type: t("type.3"),
			link: "/fpv_pro",
			src: "/img/programs/Image_4.png",
		},
		{
			id: 4,
			type: t("type.4"),
			link: "/mapping_basics",
			src: "/img/programs/Image_5.png",
		},
	];
	return (
		<div className={s.corporateWrapper}>
			<WrapperForComponents paddingTop={top} paddingBottom={bottom}>
				<div className={s.corporateBlock}>
					<div className={s.titleH2}>
						<h6 className={s.titleSmall}>{t("title_small")}</h6>
						<div className={s.title}>
							<h2 className={s.titleHead}>
								<SplitText
									text={t("title_big_1")}
									className={s.titleHead}
									delay={100}
									duration={0.1}
									ease="bounce.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="right"
								/>
								{/* {t("title_big_1")} */}
							</h2>
							<h2 className={`${s.titleHead} ${s.left}`}>
								<SplitText
									text={t("title_big_2")}
									className={`${s.titleHead} ${s.left}`}
									delay={100}
									duration={0.1}
									ease="bounce.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="left"
								/>
								{/* {t("title_big_2")} */}
								<div className={s.rectangle}></div>
							</h2>
							<h2 className={s.titleHead}>
								<SplitText
									text={t("title_big_3")}
									className={s.titleHead}
									delay={100}
									duration={0.1}
									ease="bounce.out"
									splitType="chars"
									from={{ opacity: 0, y: 40 }}
									to={{ opacity: 1, y: 0 }}
									threshold={0.01}
									rootMargin="-100px"
									textAlign="right"
								/>
								{/* {t("title_big_3")} */}
							</h2>
						</div>
					</div>

					<ul className={s.programList}>
						{programsList.map((item) => (
							<li key={item.id} className={s.programItem}>
								<Link href={item.link as StaticPathnames} className={s.link}>
									{item.type}
									<div className={s.iconBlock}>
										<svg className={s.iconLink}>
											<use href="/sprite.svg#icon-arrow-top-right"></use>
										</svg>
									</div>
								</Link>
								<Image
									src={item.src}
									width={140}
									height={170}
									alt={`item_` + item.id}
									quality={100}
									className={s.imgHover}
								/>
							</li>
						))}
					</ul>
				</div>
			</WrapperForComponents>
		</div>
	);
};

export default CorporateTraning;
