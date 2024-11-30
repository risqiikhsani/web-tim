import React from "react";
import { Main, Section, Container, Box } from "@/components/craft";
import Hero from "./_page/hero";
import Hero2 from "./_page/hero2";
import FeatureRight from "./_page/feature-right";
import FeatureLeft from "./_page/feature-left";
import Feature from "./_page/feature";
import FeatureImage from "./_page/feature-image";
import CTA from "./_page/cta";
import Pricing from "./_page/pricing";
import Footer from "./_page/footer";
import FeatureRight2 from "./_page/feature-right2";
import FeatureImage2 from "./_page/feature-image2";
import Transition from "@/components/animations/transition";
import Stat from "./_page/stat";
import Trusted from "./_page/trusted";

export default function page() {
  return (
    <Main className="py-0">

      {/* <Section className="py-0"> */}
        
      

        <Hero2 />
        <Transition direction="right">
          <Hero />
        </Transition>

        <Feature />

        <Transition direction="right">
          <FeatureRight />
        </Transition>

        <Transition direction="left">
          <FeatureLeft />
        </Transition>

        <Transition direction="right">
          <FeatureRight2 />
        </Transition>

        <Transition direction="left">
          <Pricing />
        </Transition>
        <Trusted />
        <FeatureImage2 />
        <Stat />
        <CTA />

        {/* </Container> */}
      {/* </Section> */}
    </Main>
  );
}
