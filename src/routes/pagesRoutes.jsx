import Pages from "../pages/Pages.jsx";
import UserProfile from "../pages/UserProfile.jsx";

const pagesRoutes = {
  path: "pages",
  element: <Pages />,
  children: [{ path: "user-profile", element: <UserProfile /> }],
};

export default pagesRoutes;
