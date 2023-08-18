import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Page404 from "../pages/Page404/Page404";
import Result from "../components/Result/Result";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/result",
      element: <Result/>,
    },
    {
      path:'*',
      element:<Page404/>
    }
  ]);