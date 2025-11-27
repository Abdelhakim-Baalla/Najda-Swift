
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <nav className="flex gap-4">
                <Link to="/map" className="text-blue-500 hover:underline">Map</Link>
                <Link to="/incidents" className="text-blue-500 hover:underline">Incidents</Link>
                <Link to="/fleet" className="text-blue-500 hover:underline">Fleet</Link>
            </nav>
        </div>
    );
};

export default Dashboard;
