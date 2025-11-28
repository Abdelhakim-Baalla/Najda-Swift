import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight, Activity, Shield, Globe } from 'lucide-react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="border-b border-border">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <AlertTriangle className="text-white w-5 h-5" />
                        </div>
                        <span className="text-xl font-bold">NajdaSwift</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link to="/login">
                            <Button variant="ghost">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button className="bg-red-500 hover:bg-red-600 text-white">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                <section className="py-20 lg:py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-5" />
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border backdrop-blur text-sm mb-8 animate-fade-in">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            System Operational
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                            Next-Gen Emergency <br /> Response Coordination
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
                            Orchestrate fleets, manage critical incidents, and save lives with our advanced real-time command center platform.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/register">
                                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white h-12 px-8 text-lg">
                                    Request Access <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link to="/login">
                                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                                    Live Demo
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-muted/30 border-y border-border">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <Activity className="w-6 h-6 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Real-time Telemetry</h3>
                                <p className="text-muted-foreground">Monitor patient vitals and vehicle status instantly with sub-second latency.</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <Globe className="w-6 h-6 text-red-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Smart Dispatch</h3>
                                <p className="text-muted-foreground">AI-powered routing algorithms to deploy the nearest available units.</p>
                            </div>
                            <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Secure & Compliant</h3>
                                <p className="text-muted-foreground">Enterprise-grade security ensuring HIPAA compliance and data protection.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-8 border-t border-border">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    &copy; 2024 NajdaSwift Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
