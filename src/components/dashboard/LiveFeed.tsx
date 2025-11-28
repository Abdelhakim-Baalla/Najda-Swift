import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const LiveFeed = () => {
  const events = [
    {
      id: 1,
      message: 'Cardiac Arrest reported at Sector 7',
      time: 'Just now',
      type: 'critical',
      unit: 'System',
    },
    {
      id: 2,
      message: 'Unit A-02 arrived at destination',
      time: '5m ago',
      type: 'info',
      unit: 'Driver Mike',
    },
    {
      id: 3,
      message: 'Patient delivered to General Hospital',
      time: '12m ago',
      type: 'success',
      unit: 'Dr. Sarah',
    },
    {
      id: 4,
      message: 'Unit A-03 requires maintenance check',
      time: '1h ago',
      type: 'warning',
      unit: 'Fleet Mgr',
    },
  ];

  return (
    <Card className="h-full bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Activity className="w-5 h-5 text-red-500" />
          Live Feed
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="flex gap-4 relative pl-4 border-l border-border">
            <div
              className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full ${
                event.type === 'critical'
                  ? 'bg-red-500'
                  : event.type === 'warning'
                    ? 'bg-yellow-500'
                    : event.type === 'success'
                      ? 'bg-green-500'
                      : 'bg-blue-500'
              }`}
            />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none text-foreground">{event.message}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                {event.unit}
              </div>
            </div>
            <span className="text-xs text-muted-foreground whitespace-nowrap">{event.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LiveFeed;
