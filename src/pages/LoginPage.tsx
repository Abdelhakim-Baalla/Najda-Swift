
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Login Page</h1>
            <p>Please log in to continue.</p>
            <Link to="/register" className="text-blue-500 hover:underline">Go to Register</Link>
        </div>
    );
};

export default LoginPage;
