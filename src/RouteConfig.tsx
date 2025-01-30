import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import Test from "./pages/Test";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
            path:"/",
            index:true,
            element:<Home/>
        },
        {
            path:"/test",
            element:<Test/>
        }
      ]
    }
  ])