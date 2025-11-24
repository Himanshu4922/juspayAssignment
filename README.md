## Project structure

Below is the concise tree of this project's important files and folders — core layout, routes, contexts and components.

```
/
├─ index.html                # Vite HTML entry (loads src/main.jsx)
├─ package.json              # dependencies & scripts
└─ src/
	├─ main.jsx               # app bootstrap, providers, router configuration
	├─ App.jsx                # top-level wrapper (Header + Outlet)
	├─ index.css, App.css     # global styles (Tailwind + custom CSS)
	├─ pages/
	│  ├─ Layout.jsx          # responsive shell (LeftSidebar, RightSidebar, Header, Outlet)
	│  ├─ Default.jsx         # main dashboard / overview
	│  ├─ Dashboard.jsx       # dashboard container (may render child routes)
	│  ├─ OrderList.jsx       # eCommerce orders page
	│  ├─ Home.jsx            # placeholder / home
	│  └─ ErrorPage.jsx       # route error / fallback UI
	├─ components/
	│  ├─ Header.jsx
	│  ├─ LeftSidebar.jsx
	│  ├─ RightSidebar.jsx
	│  ├─ BreadCrumbs.jsx
	│  ├─ Searchbar.jsx
	│  └─ (metric/chart components, buttons, etc.)
	├─ routes/
	│  ├─ dashboardsRoutes.jsx
	│  ├─ pagesRoutes.jsx
	│  └─ favoritesRoutes.jsx
	├─ context/
	│  ├─ ThemeProvider.jsx
	│  └─ SidebarContext.jsx
	├─ hooks/
	│  └─ UseWindowWidth.js
	└─ assets/                # SVGs, images, icons
```

This README contains only the project's structure as requested. If you'd like, I can also generate a minimal CONTRIBUTING.md or help visualize the structure with a diagram.
