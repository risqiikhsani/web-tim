import HeroCloudSolutions from "@/app/(homepage)/_public_components/hero-cloud-solutions";
import React from "react";

import Quote from "@/app/(homepage)/_public_components/quote";
import CtaOffer from "@/app/(homepage)/_public_components/cta-offer";
import Waf from "@/app/(homepage)/_public_components/waf";
import { FeatureType } from "@/types/types";
import Feature from "../../_public_components/feature";

const features: FeatureType[] = [
  {
    title: "Architecture Design",
    description:
      "Design secure, scalable AWS infrastructure for startups to enterprises",
  },

  {
    title: "DevOps Automation",
    description:
      "Build CI/CD pipelines using AWS tools like CodePipeline and CodeBuild",
  },

  {
    title: "Application Modernization",
    description:
      "Migrate and modernize legacy applications to serverless or containerized AWS services",
  },

  {
    title: "Data & Analytics Solutions",
    description:
      "Enable data-driven decisions with AWS services like Redshift, Athena, and QuickSight",
  },
];

export default function page() {
  return (
    <div>
      <HeroCloudSolutions showReadMore={false} />
      <Feature features={features}/>
      <Waf />
      <Quote />
      <CtaOffer offer="Let us design a cloud solution tailored for your business needs. Get started today!" />
    </div>
  );
}
