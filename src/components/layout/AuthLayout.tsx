import type { ReactNode } from 'react';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900/80" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <AlertTriangle className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-white">NajdaSwift</span>
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">Join the Response Network</h1>
          <p className="text-lg text-slate-300 max-w-md">
            Coordinate emergency fleets and save lives with our advanced command center platform.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur text-sm text-slate-300">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            HIPAA Compliant Platform
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          &copy; 2024 NajdaSwift Inc. All rights reserved.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
