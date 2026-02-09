import CorporateTraning from "../CorporateTraning/CorporateTraning";
import Gallary from "../Gallary/Gallary";
import Hero from "../Hero/Hero";
import HowItWorks from "../HowItWorks/HowItWorks";
import OurParthners from "../OurParthners/OurParthners";
import OurPrograms from "../OurPrograms/OurPrograms";
import SkyMaster from "../SkyMaster/SkyMaster";
import TakeControl from "../TakeControl/TakeControl";
import Testimonials from "../Testimonials/Testimonials";

export default function HomeSections() {
  return (
    <>
      <Hero />
      <OurParthners />
      <OurPrograms />
      <HowItWorks />
      <Testimonials />
      <SkyMaster />
      <TakeControl />
      <Gallary />
      <CorporateTraning />
    </>
  );
}
