import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Course from "../pages/Course";
import Login from "../pages/login/Login";
import Layout from "../pages/dashboard/Dashboard";
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
        path: "/coursera",
        element: <Course />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
