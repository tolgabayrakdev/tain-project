import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
const Login = lazy(() => import("./pages/authentication/Login"));
const Register = lazy(() => import("./pages/authentication/Register"));

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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
