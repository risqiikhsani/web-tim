import HeroEducation from "@/app/(homepage)/_public_components/hero-education";
import React from "react";


import Quote from "@/app/(homepage)/_public_components/quote";
import CtaOffer from "@/app/(homepage)/_public_components/cta-offer";
import Classes from "./classes";
import Gallery from "./gallery";
import { FeatureType } from "@/types/types";
import Feature from "../../_public_components/feature";

const features: FeatureType[] = [
  {
    title: "Customized Training Programs",
    description: "Tailor training content to meet specific team roles, from developers and architects to project managers. Ensure relevant and impactful learning experiences."
  },
  {
    title: "AWS Certifications Preparation",
    description: "Provide expert guidance for achieving AWS certifications, including Solutions Architect, Developer, Data Analytics, and more."
  },
  {
    title: "Workshops & Hands-On Labs",
    description: "Deliver live demonstrations and interactive labs, allowing participants to apply their skills in real-world AWS environments."
  },
  {
    title: "On-Demand Learning",
    description: "Offer flexible, self-paced training materials to accommodate different schedules and learning styles, ensuring accessibility for all."
  },
];


export default function page() {
  return (
    <div>
      <HeroEducation showReadMore={false}/>
      <Feature features={features}/>
      <Gallery/>
      <Classes/>
      <Quote />
      <CtaOffer offer="Equip your team with the skills to succeed in AWS. Enroll in our training programs today!"/>
    </div>
  );
}
