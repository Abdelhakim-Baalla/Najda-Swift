
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Register Page</h1>
            <p>Create a new account.</p>
            <Link to="/login" className="text-blue-500 hover:underline">Go to Login</Link>
        </div>
    );
};

export default RegisterPage;
