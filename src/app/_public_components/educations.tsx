import BorderCool from "@/components/border-cool";
import { Container, Section } from "@/components/craft";
import { H1 } from "@/components/typography/Typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface EducationProps {
  title: string;
  type: string;
  description?: string;
  features: string[];
  cta: string;
  image: string;
  href: string;
}

// Dummy Education data
const EducationPrograms: EducationProps[] = [
  {
    title: "Training Program",
    type: "AWS Cloud Practitioner",
    description: "Perfect for individuals that's new to cloud computing.",
    features: [
      "Real time video training",
      "Mentored by experts",
      "CMS Integration",
      "24/7 Chat Support",
    ],
    cta: "Read more",
    image:"/logo/aws1.png",
    href: "/services/education",
  },
  {
    title: "Training Program",
    type: "AWS Solution Architect",
    description: "Best for growing businesses to enterprise with more needs.",
    features: [
      "Real time video training",
      "Mentored by experts",
      "CMS Integration",
      "24/7 Chat Support",
    ],
    cta: "Read more",
    image:"/logo/aws2.png",
    href: "/services/education",
  },
  {
    title: "Training Program",
    type: "AWS Data Analytics",
    description: "Best for growing businesses to enterprise with more needs.",
    features: [
      "Real time video training",
      "Mentored by experts",
      "CMS Integration",
      "24/7 Chat Support",
    ],
    cta: "Read more",
    image:"/logo/aws3.png",
    href: "/services/education",
  },
];

const Education = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-4 text-center">
        <H1>Train yourself and get certified</H1>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>Select the passion that best suits your needs.</Balancer>
        </p>

        <div className="not-prose mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EducationPrograms.map((plan, index) => (
            <EducationCard plan={plan} key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const EducationCard = ({ plan }: { plan: EducationProps }) => {
  return (
    <BorderCool>
    <div className="flex flex-col rounded-lg border p-6 h-[600px]">
      <div className="text-center">
        <Badge>{plan.title}</Badge>
        <h4 className="mb-2 mt-4 text-2xl text-primary animate-ping-soft">{plan.type}</h4>
        <p className="text-sm opacity-70">{plan.description}</p>
      </div>

      <div className="my-4 border-t"></div>

      <ul className="space-y-3 text-left">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm opacity-70">
            <CircleCheck className="mr-2 h-4 w-4" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex-1"></div>
      <div className="mx-auto pt-6">
      <Image src={plan.image} width={100} height={100} alt="logo"/>
      </div>

      <div className="mt-auto pt-6">
        <Link href={plan.href}>
          <Button size={"sm"} className="w-full">
            {plan.cta}
          </Button>
        </Link>
      </div>
    </div>
    </BorderCool>
  );
};

export default Education;
