import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// import dashboardsRoutes from "./routes/dashboardsRoutes";
import { SidebarProvider } from "./context/SidebarContext.jsx";
// import favoritesRoutes from "./routes/favoritesRoutes.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import { ThemeProvider } from "./context/ThemeProvider";
import OrderList from "./pages/OrderList.jsx";
import Default from "./pages/Default.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboards/default" replace />,
      },

      {
        path: "dashboards/default",
        element: <Default />,
      },

      {
        path: "dashboards/ecommerce/orders",
        element: <OrderList />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <SidebarProvider>
        <RouterProvider router={router} />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>
);
