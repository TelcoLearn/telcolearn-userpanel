import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Login from "../pages/login/Login";
import Layout from "../pages/dashboard/Dashboard";
import Chapter from "@/pages/Chapter";
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
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "chapter",
        element: <Chapter />,
      },
      {
        path: "*",
        element: "404 page ",
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
