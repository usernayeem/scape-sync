import { createBrowserRouter } from "react-router";

import React from "react";
import { Root } from "./Root";
import { ErrorPage } from "../pages/ErrorPage";
import Home from "../pages/Home";
import { UserRolePage } from "../pages/UserRolePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { VerifyPage } from "../pages/VerifyPage";
import { AccountCreatedPage } from "../pages/AccountCreatedPage";
import { ResetPasswordPage } from "../pages/ResetPasswordPage";
import { PasswordChangedSuccessPage } from "../pages/PasswordChangedSuccessPage";

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
        path: "/account-created",
        element: <AccountCreatedPage />,
      },
      {
        path: "/password-reset",
        element: <ResetPasswordPage />,
      },
      {
        path: "/password-reset-successfull",
        element: <PasswordChangedSuccessPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
