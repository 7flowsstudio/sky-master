"use client";
import React from "react";
import s from "./TakeControl.module.css";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import useSizeWindows from "@/lib/useSizeWindows/useSizeWindows";
import TakeControlBlock from "./TakeControlBlock/TakeControlBlock";

const TakeControl = () => {
	const { top, bottom } = useSizeWindows();
	return (
		<div className={s.takeControlWrapper}>
			<WrapperForComponents paddingBottom={top} paddingTop={bottom}>
				<TakeControlBlock />
			</WrapperForComponents>
		</div>
	);
};

export default TakeControl;
