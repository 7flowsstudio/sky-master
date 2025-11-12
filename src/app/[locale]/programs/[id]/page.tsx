"use client";
import { programsData } from "@/components/Main/OurPrograms/programData";
import TraningRoadMap from "@/components/Main/TraningRoadMap/TraningRoadMap";
import TypeDrone from "@/components/Main/TypeDrone/TypeDrone";
import React, { use } from "react";

type PageProps = {
	params: Promise<{ id: string }>;
};

const Page = ({ params }: PageProps) => {
	const { id } = use(params);

	const program = programsData.find((item) => item.id === Number(id));
	// console.log("Program", program);

	if (!program) return <div>Not found</div>;

	return (
		<>
			<TypeDrone program={program} />
			<TraningRoadMap />
		</>
	);
};

export default Page;
