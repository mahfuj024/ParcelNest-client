import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home/Home"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../components/ErrorPage"
import Coverage from "../pages/Coverage/Coverage"
import AuthLayout from "../layouts/AuthLayout"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

// Create Browser Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {path : "/coverage", element : <Coverage></Coverage>}
    ],
  },
  {
    path : "/",
    element : <AuthLayout></AuthLayout>,
    children : [
      {path : "/login", element : <Login></Login>},
      {path : "/register", element : <Register></Register>}
    ]
  }

])