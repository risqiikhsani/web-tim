import HeroEducation from "@/app/(homepage)/_public_components/hero-education";
import React from "react";
import Feature from "./feature";

import Quote from "@/app/(homepage)/_public_components/quote";
import CtaOffer from "@/app/(homepage)/_public_components/cta-offer";
import Classes from "./classes";
import Gallery from "./gallery";

export default function page() {
  return (
    <div>
      <HeroEducation showReadMore={false}/>
      <Feature />
      <Gallery/>
      <Classes/>
      <Quote />
      <CtaOffer offer="Equip your team with the skills to succeed in AWS. Enroll in our training programs today!"/>
    </div>
  );
}
