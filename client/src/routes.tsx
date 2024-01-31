import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';

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
        element: <Register />
    }
]);

export default routes;
