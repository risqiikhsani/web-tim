import BorderCool from "@/components/border-cool";
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
  image: string;
  read_more_url: string;
  register_url: string;
  available: boolean;
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
    image: "/logo/aws1.png",
    read_more_url: "/services/education",
    register_url: "",
    available: false,
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
    image: "/logo/aws2.png",
    read_more_url: "/services/education",
    register_url: "",
    available: true,
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
    image: "/logo/aws3.png",
    read_more_url: "/services/education",
    register_url: "",
    available: true,
  },
];

const Education = ({ showReadMore }: { showReadMore: boolean }) => {
  return (

      <div className="flex flex-col items-center gap-4 text-center">
        <H1>Train yourself and get certified</H1>
        <p className="text-lg opacity-70 md:text-2xl">
          <Balancer>Select the passion that best suits your needs.</Balancer>
        </p>

        <div className="not-prose mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          {EducationPrograms.map((plan, index) => (
            <EducationCard plan={plan} key={index} showReadMore={showReadMore} />
          ))}
        </div>
      </div>

  );
};

const EducationCard = ({
  plan,
  showReadMore,
}: {
  plan: EducationProps;
  showReadMore: boolean;
}) => {
  return (
    <BorderCool>
      <div className="flex flex-col rounded-lg p-6 h-[600px]">
        <div className="text-center">
          <Badge>{plan.title}</Badge>
          <h4 className="mb-2 mt-4 text-2xl text-primary animate-ping-soft">
            {plan.type}
          </h4>
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
          <Image src={plan.image} width={100} height={100} alt="logo" />
        </div>

        <div className="mt-auto pt-6 flex flex-col gap-4">
          {plan.available ? (
            <Button size={"sm"} className="w-full" asChild variant="outline">
              <Link href={plan.register_url}>Register now</Link>
            </Button>
          ) : (
            <Button size={"sm"} className="w-full" variant="outline" disabled>
              Currently not available
            </Button>
          )}
          {showReadMore && (
            <Button size={"sm"} className="w-full" asChild variant="link">
              <Link href={plan.read_more_url}>Read more</Link>
            </Button>
          )}
        </div>
      </div>
    </BorderCool>
  );
};

export default Education;
