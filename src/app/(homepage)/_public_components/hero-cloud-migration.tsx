import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import BorderCool from "@/components/border-cool";
import picture from '@/service_images/aws-migration.png'
import Balancer from "react-wrap-balancer";

const HeroCloudMigration = ({showReadMore}:{showReadMore:boolean}) => {
  return (
    <section className="py-32 border-b">
      <div className="container">
        <div className="grid items-center lg:grid-cols-2 gap-10">
          {/* Move the Image to the first column */}
          {/* <BorderCool> */}
          <Image
            height={1000}
            width={1000}
            src={picture}
            alt="image"
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
              Cloud Migration and Transformation
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              <Balancer>
              Build,migrate,or transform a cloud infrastructure to enterprise ready.
              </Balancer>
            </p>
            <div className="">
              {showReadMore && <Button className="w-full sm:w-auto" asChild>
                <Link href="/services/cloud-migration-transformation">Read more</Link>
              </Button>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCloudMigration;
