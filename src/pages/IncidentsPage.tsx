import { useState } from 'react';
import { Search, Download, ChevronDown, ChevronUp, Clock, User, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const incidentsData = [
  {
    id: 'INC-2023-001',
    type: 'Cardiac Arrest',
    severity: 'Critical',
    time: 'Today 10:30',
    location: '123 Bd Anfa, Casablanca',
    status: 'Resolved',
    details: {
      patient: 'Mohammed B.',
      unit: 'A-02',
      duration: '45 min',
      timeline: [
        { status: 'Created', time: '10:30' },
        { status: 'Dispatched', time: '10:32' },
        { status: 'En Route', time: '10:33' },
        { status: 'On Scene', time: '10:45' },
        { status: 'Resolved', time: '11:20' },
      ],
    },
  },
  {
    id: 'INC-2023-002',
    type: 'Traffic Accident',
    severity: 'High',
    time: 'Today 11:15',
    location: 'Route Nationale 1, Km 12',
    status: 'Active',
  },
  {
    id: 'INC-2023-003',
    type: 'Fainting',
    severity: 'Medium',
    time: 'Today 09:45',
    location: 'Rue des écoles, Maarif',
    status: 'Resolved',
  },
  {
    id: 'INC-2023-004',
    type: 'Childbirth',
    severity: 'High',
    time: 'Yesterday 23:10',
    location: 'Hay Hassani, Bloc C',
    status: 'Resolved',
  },
];

const IncidentsPage = () => {
  const [expandedId, setExpandedId] = useState<string | null>('INC-2023-001');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Incident History</h1>
          <p className="text-muted-foreground">Archive and post-incident analysis.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" className="rounded-full">
            All
          </Button>
          <Button variant="ghost" className="rounded-full">
            Critical
          </Button>
          <Button variant="ghost" className="rounded-full">
            Open
          </Button>
          <Button variant="outline" className="ml-2">
            <Download className="w-4 h-4 mr-2" />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-card p-4 rounded-lg border border-border">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search incidents, units..."
            className="pl-9 bg-muted/50 border-none"
          />
        </div>
      </div>

      <div className="rounded-md border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Incident ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {incidentsData.map((incident) => (
              <>
                <TableRow
                  key={incident.id}
                  className={`cursor-pointer ${expandedId === incident.id ? 'bg-muted/50' : ''}`}
                  onClick={() => toggleExpand(incident.id)}
                >
                  <TableCell>
                    {expandedId === incident.id ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{incident.id}</TableCell>
                  <TableCell>{incident.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`
                            ${incident.severity === 'Critical' ? 'border-red-500 text-red-500 bg-red-500/10' : ''}
                            ${incident.severity === 'High' ? 'border-orange-500 text-orange-500 bg-orange-500/10' : ''}
                            ${incident.severity === 'Medium' ? 'border-blue-500 text-blue-500 bg-blue-500/10' : ''}
                        `}
                    >
                      {incident.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {incident.time}
                    </div>
                  </TableCell>
                  <TableCell>{incident.location}</TableCell>
                  <TableCell className="text-right">
                    <Badge
                      variant={incident.status === 'Active' ? 'default' : 'secondary'}
                      className={
                        incident.status === 'Resolved'
                          ? 'bg-green-500/10 text-green-500 hover:bg-green-500/20'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }
                    >
                      {incident.status}
                    </Badge>
                  </TableCell>
                </TableRow>
                {expandedId === incident.id && incident.details && (
                  <TableRow>
                    <TableCell colSpan={7} className="p-0 border-b">
                      <div className="p-6 bg-muted/30 space-y-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-8">
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">
                                Patient
                              </p>
                              <div className="flex items-center gap-2 font-medium">
                                <User className="w-4 h-4 text-red-500" />
                                {incident.details.patient}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">
                                Unit Assigned
                              </p>
                              <div className="flex items-center gap-2 font-medium">
                                <Ambulance className="w-4 h-4" />
                                {incident.details.unit}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase mb-1">
                                Duration
                              </p>
                              <div className="flex items-center gap-2 font-medium">
                                <Clock className="w-4 h-4 text-blue-500" />
                                {incident.details.duration}
                              </div>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Full Report &rarr;
                          </Button>
                        </div>

                        <div className="relative pt-4 pb-2">
                          <div className="absolute top-[26px] left-0 right-0 h-0.5 bg-border" />
                          <div className="flex justify-between relative z-10">
                            {incident.details.timeline.map((item, index) => (
                              <div key={index} className="flex flex-col items-center gap-2">
                                <div
                                  className={`w-3 h-3 rounded-full border-2 border-background ${index === incident.details.timeline.length - 1 ? 'bg-green-500 ring-4 ring-green-500/20' : 'bg-red-500'}`}
                                />
                                <div className="text-center">
                                  <p className="text-xs font-bold">{item.status}</p>
                                  <p className="text-[10px] text-muted-foreground">{item.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default IncidentsPage;
