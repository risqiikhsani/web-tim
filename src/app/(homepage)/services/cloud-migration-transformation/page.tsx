import HeroCloudMigration from '@/app/(homepage)/_public_components/hero-cloud-migration'
import React from 'react'

import Quote from '@/app/(homepage)/_public_components/quote'
import CtaOffer from '@/app/(homepage)/_public_components/cta-offer'
import Waf from '@/app/(homepage)/_public_components/waf'
import CoolHero from '@/app/(homepage)/_public_components/cool-hero'
import Qna from '../../_public_components/qna'
import { FaqsType, FeatureType } from '@/types/types'
import Feature from '../../_public_components/feature'

const faqs: FaqsType[] = [
  {
    question: "What is MergingHUB?",
    answer: "MergingHUB is our specialized service for cloud workload migration and transformation. It empowers customers to enhance their cloud infrastructure by transitioning to enterprise-grade architectures, optimizing performance, and ensuring scalability."
  },
  {
    question: "Who is MergingHUB designed for?",
    answer: "MergingHUB is tailored for public sector institutions, enterprises, and educational organizations. It's ideal for those transitioning to modern cloud solutions, including containerized workloads, microservices, or legacy system modernization. Whether adopting AWS Kubernetes (EKS) or seeking secure, scalable architectures, MergingHUB ensures a seamless migration experience."
  },
  {
    question: "What does MergingHUB focus on?",
    answer: "MergingHUB specializes in implementing microservices and managed services on AWS. It supports organizations transitioning to or building within the AWS ecosystem, offering rapid deployment and cost-effective solutions. This service is particularly beneficial for public sector organizations looking to modernize platforms and achieve operational efficiency."
  },
];

const features: FeatureType[] = [
  {
    title: "Seamless Cloud Migration",
    description: "Migrate workloads effortlessly to AWS with MergingHUB’s specialized migration framework. Minimize downtime and ensure data integrity throughout the transition."
  },
  {
    title: "Microservices Architecture",
    description: "Transform your legacy systems into modern, scalable microservices architectures. Improve agility, scalability, and maintainability with AWS-native services."
  },
  {
    title: "Serverless Solutions",
    description: "Leverage serverless technologies to optimize costs and increase efficiency. Build highly scalable applications without managing infrastructure."
  },
  {
    title: "AWS Kubernetes (EKS) Enablement",
    description: "Adopt container orchestration seamlessly with AWS EKS. MergingHUB ensures your Kubernetes deployments are secure, scalable, and production-ready."
  },
  {
    title: "Legacy Modernization",
    description: "Upgrade outdated platforms to modern cloud solutions. Our experts ensure smooth transitions to cloud-native services while preserving critical workflows."
  },
  {
    title: "Cost-Effective Deployments",
    description: "Optimize cloud expenditures with tailored AWS solutions. MergingHUB focuses on delivering high-performance architectures that meet your budget."
  },
  {
    title: "Public Sector & Enterprise Focus",
    description: "Designed with enterprises, government institutions, and education providers in mind. We address unique needs, from compliance to scalability, with AWS solutions."
  },
  {
    title: "Rapid Deployment & Scaling",
    description: "Accelerate your cloud adoption with fast deployments and scalable architectures. MergingHUB ensures you can scale on demand while maintaining performance."
  },
];


export default function page() {
  return (
    <div>
      <CoolHero title='Welcome to MergingHUB'/>
      <HeroCloudMigration showReadMore={false}/>
      <Qna faqs={faqs}/>
      <Feature features={features}/>
      <Waf/>
      <Quote/>
      <CtaOffer offer='Ready to move to AWS? Let us handle your migration with zero disruptions. Contact us now!'/>
    </div>
  )
}
