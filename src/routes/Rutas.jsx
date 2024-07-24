import React, { useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";

import ErrorPage from "../Page404";

import Paramo from "./Paramo";
import Onboarding from "./Onboarding";

import Home from "./Home";
import Form from "./Form";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/onboarding",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Onboarding />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/paramo",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Paramo />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/formulario",
    element: (
      <>
        <ScrollToTopOnRouteChange />
        <Form />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default router;
