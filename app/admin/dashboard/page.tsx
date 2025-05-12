'use client'

import { BarChartComponent } from '@/components/bar-chart'
import LineChartComponent from '@/components/line-chart'
import { ChartConfig } from '@/components/ui/chart'

const chartData = [
    { month: 'January', desktop: 186 },
    { month: 'February', desktop: 305 },
    { month: 'March', desktop: 237 },
    { month: 'April', desktop: 73 },
    { month: 'May', desktop: 209 },
    { month: 'June', desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#4ade80',
    },
   
} satisfies ChartConfig

const DashboardPage = () => {
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <BarChartComponent chartData={chartData} chartConfig={chartConfig} xAxisKey="month" />
            <LineChartComponent chartData={chartData} chartConfig={chartConfig} xAxisKey="month" />
        </div>
    )
}

export default DashboardPage
