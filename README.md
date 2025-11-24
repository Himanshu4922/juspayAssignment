# 📊 Juspay UI Engineer Assignment Dashboard

A responsive and pixel perfect analytics dashboard built with **React, Vite, and Tailwind CSS** as part of the **Juspay Frontend Assessment**.  
This project showcases real world dashboard functionality with interactive data visualizations, a fully functional order management system, theme switching, and a scalable recursive sidebar navigation system , all optimized for performance, responsiveness, and clean code structure.


### 🌐 [Live Demo To Assignment (Click Me)](https://juspay-assignment-ten.vercel.app/)

![Dashboard Preview](/public/preview1.png)
![Dashboard Preview](/public/preview2.png)

---

## ✨ Features

### 📊 Dashboard
- **Revenue & Sales Analytics:** Visual representation of data using Recharts.
- **Interactive World Revenue Map:** Data visualization by location.
- **Top Selling Products:** Sorted list of best performers.
- **Projections vs Actuals:** Comparative charts.
- **Quick Access Widgets:** Activity feeds and quick stats.

### 📦 Orders Page
- **Real-time Search:** Filter by Order ID or Name instantly.
- **Sorting:** Toggle between Ascending and Descending order by name.
- **Status Filters:** Filter by Pending, Approved, Completed, etc.
- **Pagination:** Efficient handling of large datasets.
- **Dynamic Rendering:** Tables populated via mock API-like data.

### 🧠 UI & UX Enhancements
- **Recursive Sidebar Dropdown:** Fully scalable nested navigation structure.
- **Breadcrumb Navigation:** Easy directory tracking.
- **Dark / Light Theme Toggle:** System wide theme management.
- **Responsive Layout:** Optimized for Desktop, Tablet, and Mobile.
- **Window Width Detection:** Custom hooks for responsive logic.
- **Custom Error Page:** Handling for 404/unknown routes.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Framework** | React (with Vite) |
| **Styling** | Tailwind CSS |
| **Charts** | Recharts |
| **State Management** | React Context API |
| **Routing** | React Router (Grouped Layout Routing) |
| **Build Tool** | Vite |
| **Package Manager** | npm |

---

## 📁 Project Structure

```text
Root
│
├── public/
│   ├── totalSalesData.json
│   ├── topSellingProductsData.json
│   ├── revenueChartData.json
│   ├── revenueByLocationData.json
│   ├── ordersData.json
│   ├── engagementData.json
│   └── avatars/
│
├── src/
│   ├── assets/
│   │   ├── worldMap.svg
│   │   └── WorldMapDark.svg
│   ├── components/
│   │   ├── ActivityCard.jsx
│   │   ├── BreadCrumbs.jsx
│   │   ├── Header.jsx
│   │   ├── LeftSidebar.jsx
│   │   ├── RecursiveSidebarItem.jsx
│   │   ├── RevenueChart.jsx
│   │   ├── RevenueWorldMap.jsx
│   │   ├── TotalSales.jsx
│   │   ├── TopSellingProducts.jsx
│   │   └── (...other UI components)
│   ├── pages/
│   │   ├── Default.jsx
│   │   ├── OrderList.jsx
│   │   ├── Layout.jsx
│   │   └── ErrorPage.jsx
│   ├── routes/
│   │   ├── dashboardsRoutes.jsx
│   │   ├── favoritesRoutes.jsx
│   │   └── pagesRoutes.jsx
│   ├── context/
│   │   ├── ThemeProvider.jsx
│   │   └── SidebarContext.jsx
│   ├── hooks/
│   │   └── useWindowWidth.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── App.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (>= 16)
- npm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Himanshu4922/juspayAssignment
   cd juspayAssignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## 🧭 Navigation Flow

| Route                          | Description                     |
|--------------------------------|---------------------------------|
| `/dashboards/default`          | Main analytics dashboard page  |
| `/dashboards/e-commerce/orders` | Orders management page         |
| `*`                            | Custom 404 error page          |

---

## 🧪 Mock Data Handling

Since there is no backend API, all data is fetched from JSON files stored in the **/public** directory to simulate real API behavior with asynchronous fetching:

- `ordersData.json`
- `revenueChartData.json`
- `totalSalesData.json`
- `topSellingProductsData.json`

---

## 🎥 Features Walkthrough (Implementation Details)

### ✅ Layout & Responsiveness  
Built using **React** and **Tailwind CSS**, following the Figma design pixel by pixel.  
The UI adapts smoothly across screen sizes using custom responsive hooks.

### ✅ Sidebar & Routing  
Implemented a recursive sidebar dropdown system that supports unlimited nested levels, making the navigation scalable and future proof.

### ✅ Theme Management  
Implemented **React Context API** to manage global light/dark theme state and eliminate prop drilling.

### ✅ Order List Page  
Includes **search, sorting, filtering, and pagination**, with optimized React state handling for performance.

---

## ⚙️ Available Scripts

| Command         | Description                               |
|----------------|-------------------------------------------|
| `npm run dev`   | Starts the development server             |
| `npm run build` | Builds the app for production             |
| `npm run preview` | Previews the production build locally    |

---

## ❗ Future Scope

- Real API backend integration  
- Authentication and protected routes  
- Export order data as CSV / PDF  
- Dashboard widget customization  
- Performance optimization with code splitting  

---

## 👤 Author

**Himanshu Bisht**  
Frontend Developer  

🔗 [GitHub](https://github.com/Himanshu4922/) 
🔗 [Portfolio](https://himanshu-portfolio-one.vercel.app/)

---


