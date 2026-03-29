import { useState } from 'react';
import { useNavigate } from 'react-router';
import { UtensilsCrossed } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - just navigate to dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/30">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-zinc-900">RestaurantOS</h1>
            <p className="text-zinc-600 mt-2">Management System</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@restaurant.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-11"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-zinc-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:text-orange-600">
                Forgot Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full h-11 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-zinc-600">
            Don't have an account?{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
              Contact Administrator
            </a>
          </div>
        </div>

        <p className="text-center mt-8 text-zinc-400 text-sm">
          © 2026 RestaurantOS. All rights reserved.
        </p>
      </div>
    </div>
  );
}
