import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from 'recharts'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { ChartProps } from '@/types/chart'

export const BarChartComponent = <T extends Record<string, unknown>>({
    title,
    description,
    chartData,
    chartConfig,
    xAxisKey,
}: ChartProps<T>) => {
    console.log('chart keys: ', Object.keys(chartConfig))

    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={true} />
                        <XAxis
                            dataKey={xAxisKey as string}
                            tickLine={false}
                            tickMargin={6}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            fontSize={10}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

                        {/* DYNAMIC BAR CHART DATA DEPENDS ON THE GIVEN CONFIG */}
                        {Object.keys(chartConfig).map((key) => (
                            <Bar key={key} dataKey={key} fill={chartConfig[key].color} />
                        ))}
                    </BarChart>
                </ChartContainer>
            </CardContent>
            {/* <CardFooter className="flex-col items-start gap-1 text-xs">
                <div className="flex items-center gap-1 font-medium">
                    +5.2% this month <TrendingUp className="h-3 w-3" />
                </div>
                <div className="text-muted-foreground">6-month visitor data</div>
            </CardFooter> */}
        </Card>
    )
}
