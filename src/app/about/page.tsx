import {
  BarChartHorizontal,
  BatteryCharging,
  CircleHelp,
  Layers,
  WandSparkles,
  ZoomIn,
} from "lucide-react";
import { ArrowDownRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const reasons = [
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BarChartHorizontal className="size-6" />,
  },
  {
    title: "Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <CircleHelp className="size-6" />,
  },
  {
    title: "Innovation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <WandSparkles className="size-6" />,
  },
  {
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <Layers className="size-6" />,
  },
  {
    title: "Efficiency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?",
    icon: <BatteryCharging className="size-6" />,
  },
];

const Page = () => {
  return (
    <div>
      <section className="py-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <Badge variant="outline">
                New Release
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Welcome to Our Website
              </h1>
              <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
              </p>
              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button className="w-full sm:w-auto">Primary Button</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                  Secondary Button
                  <ArrowDownRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
            <img
              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
              alt="placeholder hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
              Why Work With Us?
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, i) => (
              <div key={i} className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
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
