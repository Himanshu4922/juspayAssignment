import { useState } from "react";
import SwitchButton from "./SwitchButton";
import {
  Aperture,
  Bell,
  BookOpen,
  Briefcase,
  ChevronRight,
  CreditCard,
  Dot,
  FileText,
  Folder,
  MessageSquare,
  PieChart,
  ShoppingBag,
  SquareUserRound,
  User,
  Users,
} from "lucide-react";
import SidebarSection from "./SidebarSection";
import { useSidebar } from "../context/SidebarContext";
import QuickAccessSection from "./QuickAccessSection";

function LeftSidebar() {
  const dashboardsItems = [
    {
      label: "Default",
      slug: "/dashboards/default",
      icon: PieChart,
    },
    {
      label: "eCommerce",
      slug: "/dashboards/ecommerce",
      icon: ShoppingBag,
      children: [
        {
          label: "Orders",
          slug: "/dashboards/ecommerce/orders",
          icon: ShoppingBag,
        },
        {
          label: "Products",
          slug: "/dashboards/ecommerce/products",
          icon: Folder,
        },
      ],
    },
    {
      label: "Projects",
      slug: "/dashboards/projects",
      icon: Folder,
      children: [
        {
          label: "Active",
          slug: "/dashboards/projects/active-projects",
          icon: Folder,
        },
        {
          label: "Archived",
          slug: "/dashboards/projects/archived-projects",
          icon: FileText,
        },
      ],
    },
    {
      label: "Online Courses",
      slug: "/dashboards/online-courses",
      icon: BookOpen,
      children: [
        {
          label: "My Courses",
          slug: "/dashboards/online-courses/my-courses",
          icon: BookOpen,
        },
        {
          label: "Enrollments",
          slug: "/dashboards/online-courses/enrollments",
          icon: Users,
        },
      ],
    },
  ];

  const pagesItems = [
    {
      label: "User Profile",
      slug: "/pages/user-profile",
      icon: SquareUserRound,
      children: [
        {
          label: "Overview",
          slug: "/pages/user-profile/overview",
          icon: Aperture,
        },
        {
          label: "Projects",
          slug: "/pages/user-profile/projects",
          icon: Folder,
        },
        {
          label: "Campaigns",
          slug: "/pages/user-profile/campaigns",
          icon: Briefcase,
        },
        {
          label: "Documents",
          slug: "/pages/user-profile/documents",
          icon: FileText,
        },
        {
          label: "Followers",
          slug: "/pages/user-profile/followers",
          icon: Users,
        },
      ],
    },
    {
      label: "Account",
      slug: "/pages/account",
      icon: CreditCard,
      children: [
        {
          label: "Security",
          slug: "/pages/account/security",
          icon: CreditCard,
        },
        {
          label: "Billing",
          slug: "/pages/account/billing",
          icon: CreditCard,
        },
      ],
    },
    {
      label: "Blog",
      slug: "/pages/blog",
      icon: FileText,
      children: [
        {
          label: "Categories",
          slug: "/pages/blog/categories",
          icon: Folder,
        },
        {
          label: "Tags",
          slug: "/pages/blog/tags",
          icon: MessageSquare,
        },
      ],
    },
    {
      label: "Social",
      slug: "/pages/social",
      icon: MessageSquare,
      children: [
        {
          label: "Messages",
          slug: "/pages/social/messages",
          icon: MessageSquare,
        },
        {
          label: "Friends",
          slug: "/pages/social/friends",
          icon: Users,
        },
      ],
    },
  ];

  const favoritesItems = [
    {
      label: "Overview",
      slug: "/favorites/overview",
    },
    {
      label: "Projects",
      slug: "/favorites/projects",
    },
  ];
  const recentItems = [
    {
      label: "a",
      slug: "/recently/a",
    },
    {
      label: "b",
      slug: "/recently/b",
    },
  ];
  const tabs = [
    { key: "favorites", label: "Favorites" },
    { key: "recent", label: "Recently" },
  ];

  const { isLeftSidebarOpen } = useSidebar();
  const [activeTab, setActiveTab] = useState("favorites");
  const activeItems = activeTab === "favorites" ? favoritesItems : recentItems;

  return (
    <aside className={`bg-white min-h-full dark:bg-woodsmoke-950`}>
      <nav
        className={` h-full flex flex-col border-r border-woodsmoke-950/10 gap-4 bg-white dark:bg-woodsmoke-950 dark:border-white/10 ${
          isLeftSidebarOpen ? "py-5 px-4" : "px-0 py-0"
        }`}
      >
        {/* avatar and logo */}
        <div
          className={`flex items-center gap-2 ${
            isLeftSidebarOpen ? "" : "hidden"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-red-500">
            {/* <img src="" alt="" /> */}
          </div>
          <h3 className="text-sm text-woodsmoke-950 dark:text-white">
            ByeWind
          </h3>
        </div>
        <QuickAccessSection
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          activeItems={activeItems}
        />
        {/* 2nd frame */}
        <SidebarSection title="Dashboards" items={dashboardsItems} />
        {/* 3rd frame */}
        <SidebarSection title="Pages" items={pagesItems} />
      </nav>
    </aside>
  );
}

export default LeftSidebar;
