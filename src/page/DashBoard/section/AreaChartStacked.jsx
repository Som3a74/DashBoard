import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import FooterDashBoard from '../components/FooterDashBoard';
import HadderDashBoard from '../components/HadderDashBoard';
import { chartData } from '../../../util/chartData';


const AreaChartStacked = () => {

    return (
        <div className="w-full bg-background rounded-lg border border-light shadow-sm p-6">

            <HadderDashBoard title="Area Chart - Stacked" description="Showing total visitors for the last 6 months" />

            <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                        <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'Inter, sans-serif' }}
                        />
                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                        <Tooltip
                            content={({ payload }) => (
                                <div className="bg-white p-3 rounded-lg shadow-lg border">
                                    {payload?.map((entry, index) => 
                                        <div key={index} className="flex items-center gap-2 text-sm">
                                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                                            <span className="font-medium">{entry.name}:</span>
                                            <span>{entry.value}</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        />
                        <Area type="natural" dataKey="desktop" stackId="1" stroke="var(--chart-1)" fill="var(--chart-1)" fillOpacity={0.2} strokeWidth={2} />
                        <Area type="natural" dataKey="mobile" stackId="1" stroke="var(--chart-4)" fill="var(--chart-4)" fillOpacity={0.2} strokeWidth={2} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <FooterDashBoard title="Trending up by 5.2% this month" description="January - June 2024" />

        </div>
    );
};

export default AreaChartStacked;