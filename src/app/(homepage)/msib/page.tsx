import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Flag from '@/images/Flag_of_Indonesia.png';
import { Terminal } from "lucide-react";
import Image from "next/image";
import Chart from "./chart";
import Chart2 from "./chart2";
import Cta from "./cta";
import Hero from "./hero";
import Questions from "./questions";
import WhyLearnAws from "./why-learn-aws";
import WhatWeOffer from "./what-we-offer";
import WhatTheRequirements from "./what-the-requirements";
import Pictures from "./pictures";
import HeroAwsPartner from "../_public_components/hero-aws-partner";

export default function page() {
  return (
    <div className="flex flex-col gap-4">
      <Alert className="shadow-lg">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-xl font-extrabold">Note !</AlertTitle>
        <AlertDescription className="text-2xl">
          Currently, This feature is available only for <span className="text-blue-500 font-extrabold">University students from Indonesia</span>
          <Image src={Flag} width={50} height={50} alt="" className="border-2"/>
        </AlertDescription>
      </Alert>
      <Hero />
      <HeroAwsPartner showMasterLogo={false}/>
      <Pictures/>
      {/* <Hero2 /> */}
      <Questions />
      <WhyLearnAws/>
      <WhatWeOffer/>
      <div className="rounded-xl">
        <h1 className="text-primary font-bold text-2xl text-center mb-6">
          Student Analytics
        </h1>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <Chart />
          <Chart2 />
        </div>
      </div>
      <WhatTheRequirements/>
      <Cta/>
    </div>
  );
}
