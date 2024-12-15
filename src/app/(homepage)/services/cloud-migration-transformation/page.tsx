import HeroCloudMigration from "@/app/(homepage)/_public_components/hero-cloud-migration";

import CoolHero from "@/app/(homepage)/_public_components/cool-hero";
import Quote from "@/app/(homepage)/_public_components/quote";
import Waf from "@/app/(homepage)/_public_components/waf";
import BorderGradient from "@/components/border-gradient";
import { H1, H4 } from "@/components/typography/Typography";
import { FaqsType, FeatureType } from "@/types/types";
import Contact from "../../_public_components/contact";
import CtaUniqueStrength from "../../_public_components/cta-unique-strength";
import Feature from "../../_public_components/feature";
import HeroAwsPartner from "../../_public_components/hero-aws-partner";
import Qna from "../../_public_components/qna";
import HeroAwsPartner2 from "../../_public_components/hero-aws-partner-2";
import CTA from "../../_public_components/cta";
import Trusted from "../../_public_components/trusted";
import Partners from "../../_public_components/partners";
import CustomerFeedback from "../../_public_components/customer-feedback";

const faqs: FaqsType[] = [
  {
    question: "What is MergingHUB?",
    answer:
      "MergingHUB is our specialized service for cloud workload migration and transformation. It empowers customers to enhance their cloud infrastructure by transitioning to enterprise-grade architectures, optimizing performance, and ensuring scalability.",
  },
  {
    question: "Who is MergingHUB designed for?",
    answer:
      "MergingHUB is tailored for public sector institutions, enterprises, and educational organizations. It's ideal for those transitioning to modern cloud solutions, including containerized workloads, microservices, or legacy system modernization. Whether adopting AWS Kubernetes (EKS) or seeking secure, scalable architectures, MergingHUB ensures a seamless migration experience.",
  },
  {
    question: "What does MergingHUB focus on?",
    answer:
      "MergingHUB specializes in implementing microservices and managed services on AWS. It supports organizations transitioning to or building within the AWS ecosystem, offering rapid deployment and cost-effective solutions. This service is particularly beneficial for public sector organizations looking to modernize platforms and achieve operational efficiency.",
  },
];

const features: FeatureType[] = [
  {
    title: "Seamless Cloud Migration",
    description:
      "Migrate workloads effortlessly to AWS with MergingHUB’s specialized migration framework. Minimize downtime and ensure data integrity throughout the transition.",
  },
  {
    title: "Microservices Architecture",
    description:
      "Transform your legacy systems into modern, scalable microservices architectures. Improve agility, scalability, and maintainability with AWS-native services.",
  },
  {
    title: "Serverless Solutions",
    description:
      "Leverage serverless technologies to optimize costs and increase efficiency. Build highly scalable applications without managing infrastructure.",
  },
  {
    title: "AWS Kubernetes Enablement",
    description:
      "Adopt container orchestration seamlessly with AWS EKS / ECS. MergingHUB ensures your Kubernetes deployments are secure, scalable, and production-ready.",
  },
  {
    title: "Legacy Modernization",
    description:
      "Upgrade outdated platforms to modern cloud solutions. Our experts ensure smooth transitions to cloud-native services while preserving critical workflows.",
  },
  {
    title: "Cost-Effective Deployments",
    description:
      "Optimize cloud expenditures with tailored AWS solutions. MergingHUB focuses on delivering high-performance architectures that meet your budget.",
  },
  {
    title: "Public Sector & Enterprise Focus",
    description:
      "Designed with enterprises, government institutions, and education providers in mind. We address unique needs, from compliance to scalability, with AWS solutions.",
  },
  {
    title: "Rapid Deployment & Scaling",
    description:
      "Accelerate your cloud adoption with fast deployments and scalable architectures. MergingHUB ensures you can scale on demand while maintaining performance.",
  },
];

const enterprise_solutions = [
  "Serverless Microservices Architecture",
  "Containerized Microservices Architecture",
  "Serverless with Containerized Microservices",
  "Hybrid Cloud Architecture",
  "Event-Driven Serverless Architecture",
  "Multi-Cloud Architecture",
  "Edge Computing Architecture",
  "Cloud-Native Monolithic Architecture",
  "Microservices-Based Hybrid App Architecture",
  "Composable Application Architecture",
];

export default function page() {
  return (
    <div>
      <CoolHero title="Welcome to MergingHUB" />
      <HeroCloudMigration showReadMore={false} />
      <Qna faqs={faqs} />
      <H1 className="text-center">Enterprise Solutions </H1>
      <H4 className="text-center">We are here to help your business deployed in enterprise architecture that suits your workload</H4>
      <div className="grid md:grid-cols-5 grid-cols-2 justify-items-center my-10 gap-10">
        {enterprise_solutions.map((a, i) => (
          <BorderGradient key={i}>
            <H4>{a}</H4>
          </BorderGradient>
        ))}
      </div>
      <Feature features={features} />
      <Waf />
      <HeroAwsPartner showMasterLogo={false}/>
      <HeroAwsPartner2/>
      <CtaUniqueStrength/>  
      <Quote />
      <Trusted/>
      <Partners/>
      <CustomerFeedback/>
      <CTA/>
      <Contact/>
    </div>
  );
}
