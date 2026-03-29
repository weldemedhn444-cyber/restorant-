import { createBrowserRouter } from 'react-router';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Menu } from './pages/Menu';
import { Tables } from './pages/Tables';
import { Staff } from './pages/Staff';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { NotFound } from './pages/NotFound';
import { DashboardLayout } from './layouts/DashboardLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/',
    Component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        Component: Dashboard,
      },
      {
        path: 'orders',
        Component: Orders,
      },
      {
        path: 'menu',
        Component: Menu,
      },
      {
        path: 'tables',
        Component: Tables,
      },
      {
        path: 'staff',
        Component: Staff,
      },
      {
        path: 'reports',
        Component: Reports,
      },
      {
        path: 'settings',
        Component: Settings,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);