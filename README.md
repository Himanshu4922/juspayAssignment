# Juspay Dashboard (Assignment / Demo)

A responsive React + Vite dashboard UI used as an assignment/demo. The app demonstrates a multi-pane layout (left/right sidebars), header, a set of dashboard cards/charts and a few routed pages for dashboards and order listing.

---

## Table of contents

- About
- Features
- Tech stack
- Project structure
- Routing overview
- How to run
- Available scripts
- Notes & recommendations

---

## About

This repository is a small dashboard demo built with React and Vite. It includes a responsive layout, context providers for theme and sidebar states, reusable UI components and modular route definitions.

## Features

- Responsive layout with left and right sidebars
- Header and breadcrumb navigation components
- Multiple pages and nested routes (dashboards, orders, pages)
- Data visualizations using Recharts
- Theme toggling via a context provider

## Tech stack

- React 19
- React Router (v7) — using createBrowserRouter
- Vite
- Tailwind CSS
- Recharts (charts)
- Emotion / Tailwind for styles

---

## Project structure (important files)

- `index.html` — Vite entry
- `package.json` — scripts and dependencies
- `src/main.jsx` — app bootstrap + router configuration
- `src/App.jsx` — header and top-level outlet
- `src/pages/Layout.jsx` — main responsive layout (left/right sidebars)
- `src/pages/Default.jsx`, `OrderList.jsx`, `Home.jsx` — key pages
- `src/pages/ErrorPage.jsx` — route error handler
- `src/routes/*` — modular route objects (dashboardsRoutes, pagesRoutes, favoritesRoutes)
- `src/context/*` — ThemeProvider and SidebarContext
- `src/components/*` — all UI components used across the app

---

## Routing overview

Routing is set up with React Router's `createBrowserRouter` in `src/main.jsx`. Highlights:

- Index route redirects to `/dashboards/default`
- `/dashboards/default` — Default dashboard view
- `/dashboards/ecommerce/orders` — Orders list
- `*` — Error / fallback page

Notes:

- The repo contains modular route definitions in `src/routes/*.jsx`. Currently `src/main.jsx` uses a few routes directly — you can compose the main router from the modular route objects for a cleaner configuration.
- Confirm components that are expected to render child routes include `<Outlet />` (for example: `Layout.jsx` uses `<Outlet />`; if `Dashboard` has nested child routes, ensure it also renders an `<Outlet/>`).

---

## How to run

Prerequisites: Node.js (recommended v18+)

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open the URL shown by Vite (typically http://localhost:5173).

Build for production and preview the build:

```bash
npm run build
npm run preview
```

---

## Available scripts (from package.json)

- `dev` — start Vite dev server
- `build` — create a production build
- `preview` — run a preview server for the production build
- `lint` — run ESLint

---

## Notes & recommendations

- Consider composing the top-level router from the modular route objects (`src/routes/*`) to reduce duplication and centralize routing logic.
- Ensure nested routes use *relative paths* when defined as children; also make sure parent components render `<Outlet/>` where children should appear.
- Add a small CONTRIBUTING.md or testing setup if this will be extended into a shared project.

---

If you'd like, I can:

- Automatically convert `src/main.jsx` to use the modular route objects and ensure `Dashboard.jsx` renders an `<Outlet/>` when needed
- Expand this README with screenshots, badges, and deployment instructions

Let me know which you'd prefer next.
