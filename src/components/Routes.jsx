import { createBrowserRouter } from "react-router";

import React from "react";
import { Root } from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";
import { UserRolePage } from "../pages/UserRolePage";

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
        path: "/user-role",
        element: <UserRolePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
