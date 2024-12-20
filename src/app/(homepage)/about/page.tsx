import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";
import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroAwsPartner from "../_public_components/hero-aws-partner";
import Services from "../_public_components/services";
import office from '@/images/office.png'
import HeroAwsPartner2 from "../_public_components/hero-aws-partner-2";
const reasons = [
  {
    title: "Quality",
    description:
      "Delivering top-notch AWS solutions with precision and excellence, ensuring each service meets the highest standards to empower your business.",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Experience",
    description:
      "Backed by years of expertise, our team offers comprehensive AWS consulting and migration services designed to make your cloud journey seamless.",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Support",
    description:
      "Providing 24/7 dedicated support for AWS deployments, ensuring uninterrupted operations and immediate resolution of your cloud concerns.",
    icon: <CircleHelp className="size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Driving innovation with cutting-edge AWS solutions tailored to your business needs, enabling scalability, reliability, and competitive advantage.",
    icon: <WandSparkles className="size-6" />,
  },
  {
    title: "Results",
    description:
      "Delivering measurable business outcomes through optimized AWS infrastructure, migration strategies, and solutions tailored to achieve your goals.",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Efficiency",
    description:
      "Maximizing cost efficiency and performance by leveraging AWS best practices and automation, ensuring your cloud environment runs at its peak.",
    icon: <BatteryCharging className="size-6" />,
  },
];

const Page = () => {
  return (
    <div>
      <section className="">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant="outline">
                About Us
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
              <h1 className="my-6 text-4xl font-bold lg:text-6xl">
                Welcome to <span className="text-primary">TIMCorp</span>
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                As a trusted AWS Partner, we specialize in delivering seamless
                cloud migration, innovative solutions, expert consulting, and
                comprehensive education services. Unlock the full potential of
                AWS and take your business to new heights.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto" asChild>
                  <Link href="/services">
                  Our Services
                  </Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/company">
                  Company
                  </Link>
                </Button>

              </div>
            </div>
            <Image
              width={1000}
              height={1000}
              src={office}
              alt="office"
              className="max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
      <HeroAwsPartner showMasterLogo={false}/>
      <HeroAwsPartner2/>
      <Services/>
      <section className="py-10">
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
              Why Work With Us?
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent text-cyan-500">
                  {reason.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
