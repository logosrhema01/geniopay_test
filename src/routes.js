import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Wallet from './pages/Wallet';
import User from './pages/User';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'products', element: <Products /> },
        { path: 'wallets', element: <Wallet /> },
        { path: 'wallet', element: <Products /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
