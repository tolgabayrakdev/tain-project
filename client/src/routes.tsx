import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const Login = lazy(() => import('./pages/authentication/Login'));
const Register = lazy(() => import('./pages/authentication/Register'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Home = lazy(() => import('./pages/Home'));

const DashboardLayout = lazy(() => import("./layouts/AuthenticationLayout"));

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
        path: "/",
        element: <DashboardLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> }
        ]
    }

]);

export default routes;
