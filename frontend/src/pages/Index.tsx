import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Task Management System
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A modern, scalable web application built with React, TypeScript, and Lovable Cloud backend
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => navigate('/auth')}
              className="gap-2 text-lg px-8"
            >
              Get Started
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/auth')}
              className="gap-2 text-lg px-8"
            >
              Sign In
            </Button>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Secure Authentication</h3>
              <p className="text-sm text-muted-foreground">
                JWT-based authentication with secure password hashing
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Full CRUD Operations</h3>
              <p className="text-sm text-muted-foreground">
                Create, read, update, and delete tasks with ease
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="h-10 w-10 text-primary mb-3" />
              <h3 className="text-lg font-semibold mb-2">Search & Filter</h3>
              <p className="text-sm text-muted-foreground">
                Powerful search and filter capabilities for task management
              </p>
            </div>
          </div>

          {/* Technical Stack */}
          <div className="mt-16 p-8 bg-card rounded-lg border">
            <h2 className="text-2xl font-bold mb-6">Technical Stack</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-primary mb-2">Frontend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ React.js with TypeScript</li>
                  <li>✓ TailwindCSS for styling</li>
                  <li>✓ Form validation (Zod)</li>
                  <li>✓ Protected routes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Backend</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>✓ PostgreSQL database</li>
                  <li>✓ Row Level Security (RLS)</li>
                  <li>✓ JWT authentication</li>
                  <li>✓ RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
