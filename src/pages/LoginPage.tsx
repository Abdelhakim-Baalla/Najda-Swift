import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/layout/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="space-y-2 text-center lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight">Connect To Your Account</h2>
        <p className="text-muted-foreground">
          Enter your credentials to access the command center.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" placeholder="name@hospital.com" type="email" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="#" className="text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input id="password" type="password" />
        </div>

        <Button className="w-full bg-red-500 hover:bg-red-600 text-white" size="lg">
          Login
        </Button>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Link to="/register" className="text-red-500 hover:underline font-medium">
          Request Access
        </Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
