import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("./pages/authentication/Login"));
const Register = lazy(() => import("./pages/authentication/Register"));

const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default routes;