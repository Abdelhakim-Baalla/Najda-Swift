import { Activity, Truck, Clock } from 'lucide-react';
import StatCard from '@/components/dashboard/StatCard';
import IncidentChart from '@/components/dashboard/IncidentChart';
import LiveFeed from '@/components/dashboard/LiveFeed';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Command Center</h1>
                    <p className="text-muted-foreground">Live monitoring of fleet operations and emergency response.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-medium animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-red-500" />
                        LIVE SYSTEM
                    </span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
                        Status: OPTIMAL
                    </span>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatCard
                    title="Active Incidents"
                    value="12"
                    icon={Activity}
                    trend={{ value: 12, label: "vs last hour", isPositive: true }}
                />
                <StatCard
                    title="Fleet Availability"
                    value="8/12"
                    icon={Truck}
                    trend={{ value: 2, label: "Units offline", isPositive: false }}
                />
                <StatCard
                    title="Avg Response Time"
                    value="8m 30s"
                    icon={Clock}
                    trend={{ value: 30, label: "s faster than avg", isPositive: true }}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-3 h-[400px]">
                <IncidentChart />
                <div className="col-span-1">
                    <LiveFeed />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
