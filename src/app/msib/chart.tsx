"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { batch: "Batch1", SolutionArchitect: 46, DataAnalyst: 45 },
  { batch: "Batch2", SolutionArchitect: 45, DataAnalyst:  42 },
  { batch: "Batch3", SolutionArchitect: 47, DataAnalyst:  45 },
  { batch: "Batch4", SolutionArchitect: 43, DataAnalyst:  41 },
  { batch: "Batch5", SolutionArchitect: 49, DataAnalyst:  43 },
  { batch: "Batch6", SolutionArchitect: 44, DataAnalyst:  50 },
]

const chartConfig = {
  SolutionArchitect: {
    label: "SolutionArchitect",
    color: "#2563eb",
  },
  DataAnalyst: {
    label: "DataAnalyst",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Chart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Students</CardTitle>
        <CardDescription>
          Total students joined our MSIB program.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="batch"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="SolutionArchitect" fill="var(--color-SolutionArchitect)" radius={4} />
            <Bar dataKey="DataAnalyst" fill="var(--color-DataAnalyst)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
