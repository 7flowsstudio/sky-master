import React from "react";
import s from "./TypeDrone.module.css";
import ProgramDetails from "./ProgramDetails/ProgramDetails";
import DroneUse from "./DroneUse/DroneUse";
import { useTranslations } from "next-intl";

export type ProgramsItem = {
	id: string | number;
	src: string;
	src_mob: string;
	titleKey: string;
	localKey: string;
	dateKey: string;
	descrKey: string;
	drone_1_nameKey: string;
	drone_1_for_useKey: string;
	drone_2_nameKey: string;
	drone_2_for_useKey: string;
};

export type TypeDroneProps = {
	program: ProgramsItem;
};

const TypeDrone: React.FC<TypeDroneProps> = ({ program }) => {
	const t = useTranslations("OurPrograms");
	return (
		<div className={s.wrapperTypeDrone}>
			<div className={s.titleBlock}>
				<h2 className={s.title}>{t(program.titleKey)}.</h2>
				<div className={s.rectangle}></div>
			</div>
			<ProgramDetails program={program} />
			<DroneUse program={program} />
		</div>
	);
};

export default TypeDrone;
