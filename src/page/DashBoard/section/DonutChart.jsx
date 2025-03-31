import * as React from "react"
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import FooterDashBoard from './../components/FooterDashBoard';
import HadderDashBoard from "../components/HadderDashBoard";

const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--chart-1)" },
    { browser: "safari", visitors: 200, fill: "var(--chart-2)" },
    { browser: "firefox", visitors: 287, fill: "var(--chart-3)" },
    { browser: "edge", visitors: 173, fill: "var(--chart-4)" },
    { browser: "other", visitors: 190, fill: "var(--chart-5)" },
]

export function DonutChart() {

    return (
        <div className="w-full bg-background rounded-lg border border-light shadow-sm p-6">

            <HadderDashBoard title="Donut Chart - Browsers" description="January - June 2024" />

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius="60%"
                            outerRadius="80%"
                            paddingAngle={2}
                            stroke="none"
                        >
                        </Pie>
                        <Tooltip
                            content={({ payload }) => (
                                <div className="bg-white p-3 rounded-lg shadow-lg border">
                                    {payload?.map((entry, index) =>
                                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.payload.fill }} />
                                            <span className="capitalize">{entry.name}:</span>
                                            <span className="font-medium">{entry.value}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-3xl font-bold text-gray-900"
                        >
                            1,125
                            <tspan x="50%" y="60%" className="text-small-medium text-gray-500">Visitors</tspan>
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <FooterDashBoard title="Trending up by 5.2% this month" description="Showing browser usage for the last 6 months" />
        </div>
    )
}