import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Signal,
  SignalMedium,
  SignalLow,
  Download,
} from 'lucide-react';
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

const fleetData = [
  {
    id: 'A-01',
    code: '12345',
    subCode: '-A-6',
    status: 'Available',
    type: 'ALS',
    crew: 'Dr. Said, Ahmed',
    telemetry: { level: 85, status: 'Strong' },
  },
  {
    id: 'A-02',
    code: '67890',
    subCode: '-B-5',
    status: 'Busy',
    type: 'BLS',
    crew: 'Dr. Amina, Karim',
    telemetry: { level: 42, status: 'Weak' },
  },
  {
    id: 'A-03',
    code: '11223',
    subCode: '-A-6',
    status: 'Maintenance',
    type: 'ALS',
    crew: '-',
    telemetry: { level: 100, status: 'Offline' },
  },
  {
    id: 'A-04',
    code: '44556',
    subCode: '-D-8',
    status: 'Available',
    type: 'MICU',
    crew: 'Dr. Youssef, Omar',
    telemetry: { level: 92, status: 'Strong' },
  },
  {
    id: 'A-05',
    code: '99887',
    subCode: '-E-6',
    status: 'Available',
    type: 'BLS',
    crew: 'Dr. Sara, Ali',
    telemetry: { level: 65, status: 'Medium' },
  },
];

const FleetPage = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fleet Management</h1>
          <p className="text-muted-foreground">Real-time vehicle tracking and maintenance.</p>
        </div>
        <Button className="bg-red-500 hover:bg-red-600 text-white">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <div className="flex items-center justify-between gap-4 bg-card p-4 rounded-lg border border-border">
        <div className="flex items-center gap-2 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search fleet..."
              className="pl-9 bg-muted/50 border-none"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="rounded-md border border-border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Crew</TableHead>
              <TableHead>Telemetry</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fleetData.map((vehicle) => (
              <TableRow key={vehicle.id}>
                <TableCell className="font-medium">
                  <div className="flex flex-col">
                    <span className="text-base font-bold">{vehicle.id}</span>
                    <span className="text-xs text-muted-foreground">{vehicle.code}</span>
                    <span className="text-xs text-muted-foreground">{vehicle.subCode}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={`
                        ${vehicle.status === 'Available' ? 'border-green-500 text-green-500 bg-green-500/10' : ''}
                        ${vehicle.status === 'Busy' ? 'border-blue-500 text-blue-500 bg-blue-500/10' : ''}
                        ${vehicle.status === 'Maintenance' ? 'border-yellow-500 text-yellow-500 bg-yellow-500/10' : ''}
                    `}
                  >
                    {vehicle.status === 'Available' && (
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                    )}
                    {vehicle.status === 'Busy' && (
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2" />
                    )}
                    {vehicle.status === 'Maintenance' && (
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2" />
                    )}
                    {vehicle.status}
                  </Badge>
                </TableCell>
                <TableCell>{vehicle.type}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {vehicle.crew !== '-' && (
                      <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center text-xs font-bold">
                        DR
                      </div>
                    )}
                    {vehicle.crew}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {vehicle.telemetry.status === 'Strong' && (
                      <Signal className="w-4 h-4 text-green-500" />
                    )}
                    {vehicle.telemetry.status === 'Medium' && (
                      <SignalMedium className="w-4 h-4 text-yellow-500" />
                    )}
                    {vehicle.telemetry.status === 'Weak' && (
                      <SignalLow className="w-4 h-4 text-red-500" />
                    )}
                    {vehicle.telemetry.status === 'Offline' && (
                      <SignalLow className="w-4 h-4 text-muted-foreground" />
                    )}
                    <span className="text-sm">{vehicle.telemetry.level}%</span>
                    <Badge variant="secondary" className="text-xs">
                      {vehicle.telemetry.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default FleetPage;
