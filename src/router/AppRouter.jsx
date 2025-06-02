
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";
import SignIn from "../pages/SignIn";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";

import Home from "../pages/Home";
import Layout from "../pages/Layout";
import PrivateRouter from "./PrivateRouter";
import About from './../pages/About';

const router = createBrowserRouter([
      {
    path: "/", // Giriş sayfası
    element: <SignIn/>,
  },
     
  
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
