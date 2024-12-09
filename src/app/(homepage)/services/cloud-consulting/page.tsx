import HeroCloudConsulting from '@/app/(homepage)/_public_components/hero-cloud-consulting'
import React from 'react'

import Quote from '@/app/(homepage)/_public_components/quote'
import CtaOffer from '@/app/(homepage)/_public_components/cta-offer'
import Waf from '@/app/(homepage)/_public_components/waf'
import Feature from '../../_public_components/feature'
import { FeatureType } from '@/types/types'

const features: FeatureType[] = [
  {
    title: "Strategic Cloud Advisory",
    description: "Receive expert guidance to align your business goals with AWS cloud solutions. Our consultants create tailored strategies to maximize your cloud ROI."
  },
  {
    title: "Architecture Design & Optimization",
    description: "Leverage our expertise to design secure, scalable, and high-performing cloud architectures. We optimize your infrastructure for cost efficiency and resilience."
  },
  {
    title: "AWS Best Practices Implementation",
    description: "Ensure your cloud solutions adhere to AWS best practices for security, compliance, and scalability. Build a robust and future-proof infrastructure."
  },
  {
    title: "Migration Readiness Assessment",
    description: "Evaluate your current systems and identify key steps for a seamless transition to AWS. Our assessments help you reduce risk and streamline the migration process."
  },
  {
    title: "Cloud Cost Optimization",
    description: "Identify opportunities to reduce your cloud spending without compromising performance. Our experts analyze your usage and recommend actionable cost-saving measures."
  },
  {
    title: "Scalable Solutions for Growth",
    description: "Build flexible and scalable cloud solutions that grow with your business. From startups to enterprises, we design infrastructures that support your long-term success."
  },
  {
    title: "Security & Compliance Consulting",
    description: "Protect your data with secure cloud architectures that meet industry regulations. We help you implement AWS services to ensure compliance and mitigate risks."
  },
  {
    title: "Hybrid & Multi-Cloud Strategies",
    description: "Integrate AWS with existing on-premises or multi-cloud environments. Our experts create seamless solutions that leverage the best of all platforms."
  },
];


export default function page() {
  return (
    <div>
      <HeroCloudConsulting showReadMore={false}/>
      <Feature features={features}/>
      <Waf/>
      <Quote/>
      <CtaOffer offer="Ready to transform your business with AWS? Contact us for a consultation!"/>
    </div>
  )
}
