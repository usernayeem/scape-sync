import { createBrowserRouter } from "react-router";

import React from "react";
import { Root } from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";
import { UserRolePage } from "../pages/UserRolePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { VerifyPage } from "../pages/VerifyPage";

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
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/verify-email",
        element: <VerifyPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
