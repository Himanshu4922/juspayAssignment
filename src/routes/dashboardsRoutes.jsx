import Default from "../pages/Default.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import OrderList from "../pages/OrderList.jsx";

const dashboardsRoutes = {
  path: "dashboards",
  element: <Dashboard />,
  children: [
    { path: "default", element: <Default /> },
    {
      path: "ecommerce",
      children: [
        {
          path: "orders",
          element: <OrderList />,
        },
      ],
    },
  ],
};

export default dashboardsRoutes;
