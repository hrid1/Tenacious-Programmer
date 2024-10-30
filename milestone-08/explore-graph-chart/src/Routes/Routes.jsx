

import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Root from "../components/Root/Root";

export const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About> </About>,
      },
    ],
  },
]);
