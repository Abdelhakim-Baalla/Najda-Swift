
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Welcome to Najda Swift</h1>
            <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
            <Link to="/register" className="text-blue-500 hover:underline">Register</Link>
        </div>
    );
};

export default LandingPage;
