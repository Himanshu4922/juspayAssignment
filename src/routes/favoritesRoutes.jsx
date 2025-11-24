// import Favorites from "../pages/Favorites.jsx";
import Overview from "../pages/Overview.jsx";

const favoritesRoutes = {
  path: "favorites",
  children: [
    {
      index: true,
      element: <Overview />,
    },
    {
      path: "overview",
      element: <Overview />,
    },
  ],
};

export default favoritesRoutes;
