import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
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
  ]);