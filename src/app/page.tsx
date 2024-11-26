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

export default function page() {
  return (
    <Main className="bg-gradient-to-r from-slate-50 to-slate-200 dark:bg-gradient-to-r dark:from-black dark:to-slate-900">
      <Section>
        <Container>
          <Hero2 />
          <Hero />
          <Feature />
          <FeatureRight />
          <FeatureLeft />
          <FeatureRight2/>
          <Pricing />
          <FeatureImage />
          <FeatureImage2 />
          <CTA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
