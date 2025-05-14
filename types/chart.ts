import { ChartConfig } from "@/components/ui/chart"

export type ChartProps<T extends Record<string, unknown>> = {
    title: string,
    description: string
    chartData: T[]
    chartConfig: ChartConfig
    xAxisKey: keyof T // allows flexibility (e.g., "month", "label", etc.)
}