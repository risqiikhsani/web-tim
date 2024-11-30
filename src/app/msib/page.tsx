import { Container, Main, Section } from "@/components/craft";
import React from "react";
import Hero from "./hero";
import Hero2 from "./Hero2";
import Questions from "./questions";
import Chart from "./chart";
import Chart2 from "./chart2";
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import Flag from '@/images/Flag_of_Indonesia.png'

export default function page() {
  return (
    <div>
      <Alert className="shadow-lg">
        <Terminal className="h-4 w-4" />
        <AlertTitle className="text-xl font-extrabold">Note !</AlertTitle>
        <AlertDescription className="text-2xl flex gap-2">
          Currently, This feature is available only for <span className="text-blue-500 font-extrabold">University students from Indonesia</span>
          <Image src={Flag} width={50} height={50} alt="" className="border-2"/>
        </AlertDescription>
      </Alert>
      <Hero />
      <Hero2 />
      <Questions />
      <div className="bg-white dark:bg-black rounded-xl p-10">
        <h1 className="text-primary font-bold text-2xl text-center mb-6">
          Student Analytics
        </h1>
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1">
          <Chart />
          <Chart2 />
        </div>
      </div>
    </div>
  );
}
