import { useNavigate } from 'react-router';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-zinc-200">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-900 mt-4">Page Not Found</h2>
        <p className="text-zinc-600 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <Button
          onClick={() => navigate('/dashboard')}
          className="mt-6 bg-orange-500 hover:bg-orange-600"
        >
          <Home className="w-4 h-4 mr-2" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
