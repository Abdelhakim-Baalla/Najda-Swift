import type { LucideIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    trend?: {
        value: number;
        label: string;
        isPositive: boolean;
    };
    className?: string;
}

const StatCard = ({ title, value, icon: Icon, trend, className }: StatCardProps) => {
    return (
        <Card className={cn("bg-card border-border", className)}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between space-y-0 pb-2">
                    <p className="text-sm font-medium text-muted-foreground">{title}</p>
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <h2 className="text-3xl font-bold text-foreground">{value}</h2>
                    {trend && (
                        <div className={cn(
                            "flex items-center text-xs font-medium px-2 py-1 rounded-full",
                            trend.isPositive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"
                        )}>
                            {trend.isPositive ? '+' : ''}{trend.value}%
                        </div>
                    )}
                </div>
                {trend && (
                    <p className="text-xs text-muted-foreground mt-1">{trend.label}</p>
                )}
            </CardContent>
        </Card>
    );
};

export default StatCard;
