import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { DestinationsPage } from "./pages/DestinationsPage/DestinationsPage";
import { PlannerPage } from "./pages/PlannerPage/PlannerPage";
import { ContactPage } from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/destinations", element: <DestinationsPage /> },
        { path: "/planner", element: <PlannerPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
