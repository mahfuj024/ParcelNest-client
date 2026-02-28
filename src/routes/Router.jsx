import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ErrorPage from "../components/ErrorPage";

import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import SendParcel from "../pages/SendParcel/SendParcel";
import AboutUs from "../pages/AboutUs/AboutUs";
import BeARider from "../pages/BeARider/BeARider";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import AdminHome from "../pages/Dashboard/AdminDashboard/AdminHome";
import UserHome from "../pages/Dashboard/UserDashboard/UserHome";
import MyParcels from "../pages/Dashboard/UserDashboard/MyParcels";
import PaymentHistory from "../pages/Dashboard/UserDashboard/PaymentHistory";
import AllUsers from "../pages/Dashboard/AdminDashboard/AllUsers";


// Router
export const router = createBrowserRouter([

  // Main Website
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [

      {
        index: true,
        element: <Home />
      },

      {
        path: "coverage",
        element: <Coverage />
      },

      {
        path: "sendParcel",
        element: <SendParcel />
      },

      {
        path: "aboutUs",
        element: <AboutUs />
      },

      {
        path: "beArider",
        element: <BeARider />
      }

    ],
  },



  // Auth Layout
  {
    path: "/",
    element: <AuthLayout />,

    children: [

      {
        path: "login",
        element: <Login />
      },

      {
        path: "register",
        element: <Register />
      }

    ]
  },



  // Dashboard Layout
  {
    path: "dashboard",
    element: <DashboardLayout />,

    children: [
      // user route
      {
        index: true,
        element: <UserHome />
      },
      {
        path: "user-home",
        element: <UserHome />
      },
      {
        path: "my-parcels",
        element: <MyParcels></MyParcels>
      },
      {
        path: "payment-history",
        element: <PaymentHistory></PaymentHistory>
      },

      // admin route
      {
        path: "admin-home",
        element: <AdminHome />
      },
      {
        path : "all-users",
        element : <AllUsers></AllUsers>
      }


    ]
  }


]);