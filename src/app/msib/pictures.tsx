import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = [
  {
    url: "/msib_images/msib1.jpg",
  },
  {
    url: "/msib_images/msib2.jpg",
  },
  {
    url: "/msib_images/msib3.jpg",
  },
  {
    url: "/msib_images/aws4.jpg",
  },
  {
    url: "/msib_images/msib4.jpg",
  },
  {
    url: "/msib_images/msib5.jpg",
  },
  {
    url: "/msib_images/msib6.jpg",
  },
  {
    url: "/msib_images/msib7.jpg",
  },
  {
    url: "/msib_images/msib8.jpg",
  },
];
export default function Pictures() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-1">
        {images.map((a, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <Image src={a.url} width={1000} height={1000} alt="foto" className="h-[600px] w-[600px] object-cover rounded-md" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4 top-1/2 text-cyan-500 border-primary"/>
      <CarouselNext className="right-4 top-1/2 text-cyan-500 border-primary" />
    </Carousel>
  );
}
