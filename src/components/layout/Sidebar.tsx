import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, Truck, AlertTriangle, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: Map, label: 'Dispatch Map', path: '/map' },
        { icon: Truck, label: 'Fleet', path: '/fleet' },
        { icon: AlertTriangle, label: 'Incidents', path: '/incidents' },
    ];

    return (
        <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
            <div className="p-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <AlertTriangle className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-foreground">NajdaSwift</span>
            </div>

            <nav className="flex-1 px-4 py-4 space-y-2">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                    <Settings className="w-5 h-5" />
                    Settings
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
