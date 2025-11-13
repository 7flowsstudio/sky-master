"use client";
import FlightReadyAnswers from "@/components/Main/FlightReadyAnswers/FlightReadyAnswers";
import { programsData } from "@/components/Main/OurPrograms/programData";
import TakeControlBlock from "@/components/Main/TakeControl/TakeControlBlock/TakeControlBlock";
import TraningRoadMap from "@/components/Main/TraningRoadMap/TraningRoadMap";
import TypeDrone from "@/components/Main/TypeDrone/TypeDrone";
import WrapperForAllSidesComponents from "@/components/UI/WrapperForAllSidesComponents/WrapperForAllSidesComponents";
import useIsMobile from "@/lib/isMobile/isMobile";
import React, { use } from "react";

type PageProps = {
	params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
	const { id } = use(params);
	const isMobile = useIsMobile();

	const program = programsData.find((item) => item.id === Number(id));
	// console.log("Program", program);

	if (!program) return <div>Not found</div>;

	return (
		<>
			<TypeDrone program={program} />
			<TraningRoadMap />
			<WrapperForAllSidesComponents
				paddingBottom={40}
				paddingTop={40}
				paddingLeft={isMobile ? 8 : 40}
				paddingRight={isMobile ? 8 : 40}
			>
				<TakeControlBlock />
			</WrapperForAllSidesComponents>
			<FlightReadyAnswers />
		</>
	);
};

export default Page;
