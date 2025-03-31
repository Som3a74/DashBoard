import { CartesianGrid, LabelList, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import FooterDashBoard from "../components/FooterDashBoard"
import HadderDashBoard from './../components/HadderDashBoard';
import { chartData } from '../../../util/chartData';

export function LineChartLabels() {
    return (
        <div className="w-full bg-background rounded-lg border border-light shadow-sm p-6">
            <HadderDashBoard title="Line Chart - Traffic" description="January - June 2024" />

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} stroke="#e2e8f0" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#64748b', fontSize: 12 }}
                        />
                        <Tooltip
                            content={({ payload }) => (
                                <div className="bg-white p-3 rounded-lg shadow-lg border ">
                                    {payload?.map((entry, index) =>
                                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700 ">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.stroke }} />
                                            <span className="capitalize">{entry.name}:</span>
                                            <span className="font-medium">{entry.value}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        <Line
                            type="natural"
                            dataKey="desktop"
                            stroke="var(--chart-1)"
                            strokeWidth={2}
                            dot={{ fill: "var(--chart-4)", strokeWidth: 2, r: 4, }}
                            activeDot={{ r: 6, fill: "var(--chart-5)", stroke: "#fff", strokeWidth: 2, }}
                        >
                            <LabelList dataKey="desktop" position="top" offset={12} className="text-xs fill-gray-500 " />
                        </Line>

                    </LineChart>
                </ResponsiveContainer>
            </div>

            <FooterDashBoard title="Trending up by 5.2% this month" description=" Showing total visitors for the last 6 months" />
        </div>
    )
}