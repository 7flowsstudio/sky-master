// import CorporateTraning from "@/components/Main/CorporateTraning/CorporateTraning";
// import Gallary from "@/components/Main/Gallary/Gallary";
// import Hero from "@/components/Main/Hero/Hero";
// import HowItWorks from "@/components/Main/HowItWorks/HowItWorks";
// import OurParthners from "@/components/Main/OurParthners/OurParthners";
// import OurPrograms from "@/components/Main/OurPrograms/OurPrograms";
// import SkyMaster from "@/components/Main/SkyMaster/SkyMaster";
// import TakeControl from "@/components/Main/TakeControl/TakeControl";
// import Testimonials from "@/components/Main/Testimonials/Testimonials";
// import { Locale } from "@/i18n/routing";
// import { setRequestLocale } from "next-intl/server";

// type Props = {
//   params: Promise<{ locale: Locale }>;
// };

// export default async function IndexPage({ params }: Props) {
//   const { locale } = await params;
//   setRequestLocale(locale);

//   return (
//     <>
//       <Hero />
//       <OurParthners />
//       <OurPrograms />
//       <HowItWorks />
//       <Testimonials />
//       <SkyMaster />
//       <TakeControl />
//       <Gallary />
//       <CorporateTraning />
//     </>
//   );
// }

import HomeSections from "@/components/Main/HomeSections/HomeSections";
import { Locale } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function IndexPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeSections />;
}
