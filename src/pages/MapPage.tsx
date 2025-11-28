import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Navigation, Zap } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapPage = () => {
    const center = [33.5731, -7.5898] as [number, number]; // Casablanca

    return (
        <div className="relative h-[calc(100vh-8rem)] w-full rounded-lg overflow-hidden border border-border">
            <MapContainer center={center} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[33.5731, -7.5898]}>
                    <Popup>
                        Unit A-01 <br /> Available
                    </Popup>
                </Marker>
                <Marker position={[33.5800, -7.6000]}>
                    <Popup>
                        Incident #1234 <br /> Cardiac Arrest
                    </Popup>
                </Marker>
            </MapContainer>

            <Card className="absolute top-4 right-4 w-96 z-[1000] bg-card/95 backdrop-blur shadow-xl border-border">
                <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                        <Badge variant="destructive" className="mb-2">CRITICAL ALERT</Badge>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                            <span className="sr-only">Close</span>
                            &times;
                        </Button>
                    </div>
                    <CardTitle className="text-xl">Cardiac Arrest</CardTitle>
                    <p className="text-sm text-muted-foreground">ID: #1234</p>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-red-500" />
                            <span>123 Bd Zerktouni, Casablanca</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>10:42 (4 min ago)</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-sm font-semibold text-muted-foreground">RECOMMENDED UNITS</h4>
                            <Badge variant="outline" className="text-[10px]">Auto-sorted</Badge>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50 border border-primary/20">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">A-01</span>
                                        <span className="text-red-500 text-xs font-bold">3 min</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Team Alpha</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-[10px]">ALS</Badge>
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-transparent hover:border-border transition-colors">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold">A-02</span>
                                        <span className="text-red-500 text-xs font-bold">8 min</span>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Team Bravo</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Badge variant="secondary" className="text-[10px]">BLS</Badge>
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                        <Navigation className="w-4 h-4 mr-2" />
                        Dispatch A-01
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default MapPage;
