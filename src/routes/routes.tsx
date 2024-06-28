import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainLayout from "src/layouts/main.layout";
import LoginPage from "src/pages/auth/login/login.page";
import BusinessPage from "src/pages/business";
import DayOffPage from "src/pages/day-off";
import Home1 from "src/pages/home/home.home1";
import Home2 from "src/pages/home/home.home2";
import Home from "src/pages/home/home.page";
import MailPage from "src/pages/mail";
import NotificationPage from "src/pages/notification/notify.page";
import NotificationPage1 from "src/pages/notification/notify.page1";
import NotificationPage2 from "src/pages/notification/notify.page2";
import Profile1 from "src/pages/profile/profile.page";
import Profile from "src/pages/profile/profile.page";
import Profile2 from "src/pages/profile/profile.page2";
import WagePage from "src/pages/wage/wage";
import WageYear from "src/pages/wage/wage-year";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/home1",
        element: <Home1 />,
      },
      {
        path: "/home/home2",
        element: <Home2 />,
      },
      {
        path: "/wage",
        element: <WagePage />,
      },
      {
        path: "/wage/year",
        element: <WageYear />,
      },
      {
        path: "/job",
        element: <Profile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/profile/profile1",
        element: <Profile1 />,
      },
      {
        path: "/profile/profile2",
        element: <Profile2 />,
      },
      {
        path: "/notification",
        element: <NotificationPage />,
      },
      {
        path: "/notification/notification1",
        element: <NotificationPage1 />,
      },
      {
        path: "/notification/notification2",
        element: <NotificationPage2 />,
      },
      {
        path: "/business",
        element: <BusinessPage />,
      },
      {
        path: "/day-off",
        element: <DayOffPage />,
      },
      {
        path: "/mail",
        element: <MailPage />,
      },
    ],
  },
]);
