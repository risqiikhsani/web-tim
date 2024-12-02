import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import photo from "@/msib_images/msib2.jpg";
import BorderCool from "@/components/border-cool";

const Hero = () => {
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
              Welcome to <br />
              <span className="text-blue-500">Timcorp Academy</span> X{" "}
              <span className="font-bold text-blue-500">
                MSIB Kampus Merdeka
              </span>
            </h1>
            <div className="flex gap-4 dark:invert items-center justify-center flex-wrap">
              <Image
                src="/msib_images/msib_logo.png"
                width={100}
                height={100}
                alt="logo"
              />
              <Image
                src="/msib_images/Logo_Kampus_Merdeka_Kemendikbud.png"
                width={100}
                height={100}
                alt="logo"
              />
              <Image
                src="/msib_images/timcorp-academy.png"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Belajar AWS Cloud bersama TIMCorp , Daftar melalui Kampus Merdeka
              sekarang juga.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto" asChild>
                <Link
                  href="https://kampusmerdeka.kemdikbud.go.id/"
                  target="_blank"
                >
                  Pelajari lebih tentang program Kampus Merdeka
                </Link>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
          <BorderCool>
            <Image
              height={1000}
              width={1000}
              src={photo}
              alt="placeholder hero"
              className="max-h-96 w-full rounded-md object-cover"
            />
          </BorderCool>
        </div>
      </div>
    </section>
  );
};

export default Hero;
