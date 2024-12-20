import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import BorderCool from "@/components/border-cool";
import picture from '@/service_images/aws-training.png'
import Balancer from "react-wrap-balancer";

const HeroEducation = ({showReadMore}:{showReadMore:boolean}) => {
  return (
    <section className="py-32 border-b">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              Service
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Education / Training
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              <Balancer>
              We provide an education / training program for you to boost your relevant skills.
              </Balancer>
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {showReadMore && <Button className="w-full sm:w-auto" asChild>
                <Link href="/services/education">Read more</Link>
              </Button>}
            </div>
          </div>
          {/* <BorderCool> */}
          <Image
            height={1000}
            width={1000}
            src={picture}
            alt="placeholder HeroEducation"
            className="w-full rounded-md object-cover"
          />
          {/* </BorderCool> */}
        </div>
      </div>
    </section>
  );
};

export default HeroEducation;
