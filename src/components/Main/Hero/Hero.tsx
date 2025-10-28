"use client";
import React from "react";
import WrapperForComponents from "@/components/UI/WrapperForComponents/WrapperForComponents";
import s from "./Hero.module.css";
import Drone from "./Drone/Drone";
import HeroH1 from "./HeroH1/HeroH1";
import DescriptionHero from "./DescriptionHero/DescriptionHero";

const Hero = () => {
	return (
		<WrapperForComponents paddingBottom={40}>
			<div className={s.heroWrapper}>
				<Drone />
				<HeroH1 />
				<DescriptionHero />
			</div>
		</WrapperForComponents>
	);
};

export default Hero;
