import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const Login = lazy(() => import('./pages/authentication/Login'));
const Register = lazy(() => import('./pages/authentication/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));

/* Dashboard Pages */
const IndexPage = lazy(() => import('./pages/dashboard/Index'));
const SettingsPage = lazy(() => import('./pages/dashboard/Settings'));
const AuthenticationLayout = lazy(
    () => import('./layouts/AuthenticationLayout'),
);
const DashboardLayout = lazy(() => import('./layouts/DashboardLayout'));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
    {
        path: '/',
        element: <AuthenticationLayout />,
        children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
        ],
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            { path: '', element: <IndexPage /> },
            { path: 'settings', element: <SettingsPage /> }
        ],
    },
]);

export default routes;
