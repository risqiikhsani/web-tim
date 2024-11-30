import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Card, CardContent } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypographyH1 } from "@/components/typography/TypographyH1";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1721041879224-ff011603ada5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const feedback = [
  {
    "type":"student",
    "name":"Risqi Ikhsani",
    "university":"UTDI",
    "workplace":"",
    "comment":"Timcorp has given a very good lesson to their MSIB students. We very much enjoyed our moment when we were studying AWS Solution Architect."
  },
  {
    "type":"student",
    "name":"Risqi Ikhsani",
    "university":"UTDI",
    "workplace":"",
    "comment":"Timcorp has given a very good lesson to their MSIB students. We very much enjoyed our moment when we were studying AWS Solution Architect."
  },
  {
    "type":"student",
    "name":"Risqi Ikhsani",
    "university":"UTDI",
    "workplace":"",
    "comment":"Timcorp has given a very good lesson to their MSIB students. We very much enjoyed our moment when we were studying AWS Solution Architect."
  },
  {
    "type":"student",
    "name":"Risqi Ikhsani",
    "university":"UTDI",
    "workplace":"",
    "comment":"Timcorp has given a very good lesson to their MSIB students. We very much enjoyed our moment when we were studying AWS Solution Architect."
  }
]

const FeatureImage2 = () => {
  return (
    <Section>
      <Container className="flex flex-col justify-center items-center">
        <TypographyH1>Feedback from Customers and Students</TypographyH1>
        <p>
          Here are the list of feedbacks we`ve received.
        </p>
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {/* {photos.map((photo, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      <Image
                        src={photo.src}
                        alt="Presets.com Example Image"
                        width={720}
                        height={480}
                        className="absolute inset-0 h-full w-full object-cover"
                      ></Image>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))} */}
            {feedback.map((data, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 md:mx-6"
              >
                <div className="">
                  <Card className="relative overflow-hidden border-2 border-primary">
                    <CardContent className="not-prose flex flex-col aspect-square items-start justify-start p-2">
                      <p className="text-muted-foreground"><span className="text-orange-500 font-bold text-2xl">``</span> {data.comment} <span className="text-orange-500 font-bold text-2xl">``</span></p>
                      <div className="flex-1"></div>
                      <h1 className="text-primary text-2xl">{data.name}</h1>
                      <h3 className="text-muted-foreground">{data.type} from {data.university} {data.workplace}</h3>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 text-cyan-500 border-primary"/>
          <CarouselNext className="right-4 top-1/2 text-cyan-500 border-primary" />
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeatureImage2;
