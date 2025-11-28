import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { time: '00:00', value: 20 },
    { time: '04:00', value: 15 },
    { time: '08:00', value: 45 },
    { time: '12:00', value: 80 },
    { time: '16:00', value: 95 },
    { time: '20:00', value: 60 },
    { time: '23:59', value: 30 },
];

const IncidentChart = () => {
    return (
        <Card className="col-span-2 bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle className="text-lg">Incident Volume</CardTitle>
                    <p className="text-sm text-muted-foreground">Real-time call volume vs active units</p>
                </div>
                <div className="flex gap-2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">Today</span>
                    <span className="px-3 py-1 text-xs font-medium rounded-full text-muted-foreground hover:bg-accent cursor-pointer">Week</span>
                </div>
            </CardHeader>
            <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="time"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}`}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                            itemStyle={{ color: 'var(--foreground)' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="var(--primary)"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default IncidentChart;
