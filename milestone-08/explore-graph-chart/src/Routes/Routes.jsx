import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/pages/About/About";
import Root from "../components/Root/Root";
import UserDetails from "../components/pages/UserDetails/UserDetails";
import NotFound from "../components/pages/NotFound/NotFound";

export const router = new createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users/"),
      },
      {
        path: "/about",
        element: <About> </About>,
      },
      {
        path: "/user/:uid",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.uid}`),
        element: <UserDetails></UserDetails>,
      },
    ],
  },

]);
