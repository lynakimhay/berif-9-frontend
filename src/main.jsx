import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Farmers from "./pages/Farmer";
import "./index.css";
import App from "./App";
import Farmland from "./pages/Farmland";
import Cropcycle from "./pages/Cropcycle";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/farmers",
        element: <Farmers />
      },
      {
        path: "/farmlands",
        element: <Farmland />
      },
      {
        path: "/cropcycles",
        element: <Cropcycle />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
