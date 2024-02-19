import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ErrorPage from "../Page404";
import Paramo from "./Paramo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/paramo",
    element: <Paramo />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
