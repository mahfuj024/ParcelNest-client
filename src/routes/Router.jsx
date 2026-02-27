import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home/Home/Home"
import { createBrowserRouter } from "react-router"
import ErrorPage from "../components/ErrorPage"

// Create Browser Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> }
    ],
  }])