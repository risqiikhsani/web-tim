import Balancer from "react-wrap-balancer";
import { Article, Container, Section } from "@/components/craft";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { TypographyH1 } from "@/components/typography/TypographyH1";

interface PricingCardProps {
  title: string;
  type: string;
  description?: string;
  features: string[];
  cta: string;
  image: string;
  href: string;
}

// Dummy pricing data
const pricingData: PricingCardProps[] = [
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

const Pricing = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center gap-4 text-center">
        <TypographyH1>Train yourself and get certified</TypographyH1>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>Select the passion that best suits your needs.</Balancer>
        </p>

        <div className="not-prose mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingData.map((plan, index) => (
            <PricingCard plan={plan} key={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

const PricingCard = ({ plan }: { plan: PricingCardProps }) => {
  return (
    <div className="flex flex-col rounded-lg border p-6">
      <div className="text-center">
        <Badge>{plan.title}</Badge>
        <h4 className="mb-2 mt-4 text-2xl text-primary">{plan.type}</h4>
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
  );
};

export default Pricing;
