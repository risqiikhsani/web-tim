import { H1 } from "@/components/typography/Typography";
import Image from "next/image";
import React from "react";

const data = [
  {
    name: "aws",
    image: "/partners/awslogo.png",
  },
  {
    name: "kampusmerdeka",
    image: "/partners/kampus_merdeka.png",
  },
  {
    name: "kedaireka",
    image: "/partners/kedaireka.png",
  },
  {
    name: "pens",
    image: "/partners/pens.png",
  },
  {
    name: "tanipintar",
    image: "/partners/tanipintar.png",
  },
];

export default function Partners() {
  return (
    <div className="flex gap-6 justify-center items-center flex-col py-10">
      <H1>Partners</H1>
      <div className="flex gap-10 flex-wrap justify-center items-center">
        {data.map((a, i) => (
          <Image
            key={i}
            src={a.image}
            alt={a.name}
            width="500"
            height="500"
            className="h-20 w-auto"
          />
        ))}
      </div>
    </div>
  );
}
