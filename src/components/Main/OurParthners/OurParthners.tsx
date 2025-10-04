import React from "react";
import s from "./OurParthners.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";

const OurParthners = () => {
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
	return (
		<div className={s.ourParthnersWrapper}>
			<h3 className={s.ourParthnersTitle}>{t("title")}</h3>
			<ul className={s.ourParthnersList}>
				{listParthners.map((item) => (
					<li key={item.id} className={s.ourParthnersItem}>
						<Image
							src={item.src}
							width={0}
							height={0}
							sizes="100vw"
							alt={`image` + item.id}
							className={s.imgParthners}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default OurParthners;
