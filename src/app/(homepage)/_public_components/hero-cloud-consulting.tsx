import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import BorderCool from "@/components/border-cool";

import picture from '@/service_images/aws-call.png'
import Balancer from "react-wrap-balancer";

const HeroCloudConsulting = ({showReadMore}:{showReadMore:boolean}) => {
  return (
    <section className="py-32 border-b">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Move the Image to the first column */}
          {/* <BorderCool> */}
          <Image
            height={1000}
            width={1000}
            src={picture}
            alt="placeholder FeatureLeft"
            className="w-full rounded-md object-cover"
          />
          {/* </BorderCool> */}
          {/* Text content remains in the second column */}
          <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
            <Badge variant="outline">
              Service
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Cloud Consulting and Solutions
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              <Balancer>
              Consult with us any day any time, We provide solutions for any problems.
              </Balancer>
            </p>
            <div className="">
              {showReadMore && <Button className="w-full sm:w-auto" asChild>
                <Link href="/services/cloud-consulting">Read more</Link>
              </Button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCloudConsulting;
