
import { Link } from 'react-router-dom';

const FleetPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Fleet Page</h1>
            <Link to="/dashboard" className="text-blue-500 hover:underline">Back to Dashboard</Link>
        </div>
    );
};

export default FleetPage;
