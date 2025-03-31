import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import FooterDashBoard from "../components/FooterDashBoard"
import HadderDashBoard from "../components/HadderDashBoard"
import { chartData } from '../../../util/chartData';


export function BarChartMultiple() {
    return (
        <div className="w-full bg-background rounded-lg border border-light shadow-sm p-6">

            <HadderDashBoard title="Bar Chart - Multiple" description="January - June 2024" />

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            tick={{ fill: '#64748b', fontSize: 12, }}
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
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.fill }} />
                                            <span>{entry.name}:</span>
                                            <span className="font-medium">{entry.value}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        <Bar dataKey="desktop" fill="#f05024" radius={[4, 4, 0, 0]} barSize={24} />
                        <Bar dataKey="mobile" fill="#f59e00" radius={[4, 4, 0, 0]} barSize={24} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <FooterDashBoard title="Trending up by 5.2% this month" description=" Showing total visitors for the last 6 months" />
        </div>
    )
}