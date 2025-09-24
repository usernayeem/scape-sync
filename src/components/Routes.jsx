import { createBrowserRouter } from "react-router";

import React from "react";
import { Root } from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
