"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

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
    color: "hsl(var(--chart-1))",
  },
  DataAnalyst: {
    label: "DataAnalyst",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Chart2() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Total Students</CardTitle>
        <CardDescription>
          Total Students joined our MSIB program.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="batch"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="DataAnalyst"
              type="natural"
              fill="var(--color-DataAnalyst)"
              fillOpacity={0.4}
              stroke="var(--color-DataAnalyst)"
              stackId="a"
            />
            <Area
              dataKey="SolutionArchitect"
              type="natural"
              fill="var(--color-SolutionArchitect)"
              fillOpacity={0.4}
              stroke="var(--color-SolutionArchitect)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this batch <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>  
      </CardFooter> */}
    </Card>
  )
}
