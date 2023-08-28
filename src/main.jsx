import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import ProductPage from "./pages/product";
import ProfilePage from "./pages/profile";
import Api from "./pages/api";
import Todo from "./pages/todo";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div></div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/api",
    element: <Api />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <ProductPage />
    <RouterProvider router={router} />
  </React.StrictMode>
);
