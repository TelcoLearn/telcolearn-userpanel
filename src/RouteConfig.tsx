import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import Test from "./pages/Test";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);
