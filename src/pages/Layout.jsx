import LeftSidebar from "../components/LeftSidebar";
import { useSidebar } from "../context/SidebarContext";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import RightSidebar from "./../components/RightSidebar";
import useWindowWidth from "../hooks/UseWindowWidth";
import { useEffect } from "react";

function Layout() {
  const {
    isLeftSidebarOpen,
    isRightSidebarOpen,
    setIsLeftSidebarOpen,
    setIsRightSidebarOpen,
  } = useSidebar();
  const width = useWindowWidth();
  const isDesktop = width >= 1280;

  useEffect(() => {
    if (!isDesktop && (isLeftSidebarOpen || isRightSidebarOpen)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDesktop, isLeftSidebarOpen, isRightSidebarOpen]);

  if (isDesktop) {
    return (
      <div className="relative flex w-full overflow-hidden min-h-screen">
        <div className={`${isLeftSidebarOpen ? "w-[191px]" : "w-0"}`}>
          <LeftSidebar />
        </div>
        <div
          className={`flex flex-col
              w-full 
            `}
        >
          <Header />
          <Outlet />
        </div>
        <div className={`${isRightSidebarOpen ? "w-[280px]" : "w-0"}`}>
          <RightSidebar />
        </div>
      </div>
    );
  } else {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <div
          className={`fixed inset-y-0 left-0 z-30 w-[191px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isLeftSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <LeftSidebar />
        </div>

        <div
          className={`fixed inset-y-0 right-0 z-30 w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isRightSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <RightSidebar />
        </div>

        {(isLeftSidebarOpen || isRightSidebarOpen) && (
          <div
            className="fixed inset-0 bg-woodsmoke-950/5 z-10"
            onClick={() => {
              if (isLeftSidebarOpen) setIsLeftSidebarOpen(false);
              if (isRightSidebarOpen) setIsRightSidebarOpen(false);
            }}
          />
        )}

        <div
          className={`flex flex-col min-h-screen ${
            isLeftSidebarOpen || isRightSidebarOpen
              ? "opacity-60 pointer-events-none"
              : "opacity-100 pointer-events-auto"
          }`}
        >
          <Header />
          <Outlet />
        </div>
      </div>
    );
  }
}

export default Layout;
