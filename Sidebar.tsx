import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  ShoppingBag,
  UtensilsCrossed,
  Users,
  FileText,
  Settings,
  Table2,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Orders', href: '/orders', icon: ShoppingBag },
  { name: 'Menu', href: '/menu', icon: UtensilsCrossed },
  { name: 'Tables', href: '/tables', icon: Table2 },
  { name: 'Staff', href: '/staff', icon: Users },
  { name: 'Reports', href: '/reports', icon: FileText },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-zinc-900 text-white flex flex-col border-r border-zinc-800">
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <UtensilsCrossed className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-semibold">RestaurantOS</h1>
            <p className="text-xs text-zinc-400">Management System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                  : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="text-xs text-zinc-500 text-center">
          © 2026 RestaurantOS
        </div>
      </div>
    </div>
  );
}
