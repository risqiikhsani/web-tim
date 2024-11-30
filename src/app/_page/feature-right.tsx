import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import { featureText } from "@/const/const";

const FeatureRight = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              New Release
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to <br/><span className="text-blue-500">Timcorp Academy</span> X <span className="font-bold text-blue-500">MSIB Kampus Merdeka</span>
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Belajar AWS Cloud bersama TIMCorp , Daftar melalui Kampus Merdeka sekarang juga.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto" asChild>
                <Link href="#readmore">Read more</Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <Image
            height={1000}
            width={1000}
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder FeatureRight"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureRight;
