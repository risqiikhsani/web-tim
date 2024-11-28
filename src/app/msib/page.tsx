import { Container, Main, Section } from "@/components/craft";
import React from "react";
import Hero from "./hero";
import Hero2 from "./Hero2";
import Questions from "./questions";
import Chart from "./chart";
import Chart2 from "./chart2";

export default function page() {
  return (
    <div>
      <Hero />
      <Hero2 />
      <Questions />
      <div className="bg-white dark:bg-black rounded-xl p-10">
        <h1 className="text-primary font-bold text-2xl text-center">
          Analytics
        </h1>
        <div className=" flex gap-6 md:flex-row flex-col">
        <Chart />
        <Chart2 />
        </div>

      </div>
    </div>
  );
}
