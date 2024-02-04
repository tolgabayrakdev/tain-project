import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/authentication/Login'));
const Register = lazy(() => import('./pages/authentication/Register'));
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));
const Settings = lazy(() => import('./pages/dashboard/Settings'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: '/', element: <Home />, index: true },
            { path: 'settings', element: <Settings /> },
        ],
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },
]);

export default routes;
