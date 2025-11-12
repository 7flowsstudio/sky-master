import React from "react";
import s from "./DroneUse.module.css";
import Image from "next/image";
import { TypeDroneProps } from "../TypeDrone";
import { useTranslations } from "next-intl";

const DroneUse: React.FC<TypeDroneProps> = ({ program }) => {
	const t = useTranslations("OurPrograms");
	return (
		<div className={s.dronesUse}>
			<h4 className={s.titleUse}>{t("title_use")}</h4>
			<ul className={s.dronesList}>
				<li className={s.dronesItem}>
					<Image
						src="/img/programs/drones_types/fpv_racing_drones.webp"
						width={250}
						height={150}
						alt="img_drone"
						className={s.imageUse}
					/>
					<div className={s.infoDrones}>
						<h5 className={s.infoTitle}>{t(program.drone_1_nameKey)}</h5>
						<h6 className={s.infoText}>{t(program.drone_1_for_useKey)}</h6>
					</div>
				</li>
				<li className={s.dronesItem}>
					<Image
						src="/img/programs/drones_types/mavic_2_mini_2.webp"
						width={250}
						height={150}
						alt="img_drone"
						className={s.imageUse}
					/>
					<div className={s.infoDrones}>
						<h5 className={s.infoTitle}>{t(program.drone_2_nameKey)}</h5>
						<h6 className={s.infoText}>{t(program.drone_2_for_useKey)}</h6>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default DroneUse;
