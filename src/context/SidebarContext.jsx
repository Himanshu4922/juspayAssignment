import { createContext, useContext, useEffect, useState } from "react";
import useWindowWidth from "../hooks/UseWindowWidth";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const width = useWindowWidth();
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(
    width > 1280 ? true : false
  );
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(
    width > 1280 ? true : false
  );

  useEffect(() => {
    if (width > 1280) {
      setIsLeftSidebarOpen(true);
      setIsRightSidebarOpen(true);
    } else {
      setIsLeftSidebarOpen(false);
      setIsRightSidebarOpen(false);
    }
  }, [width]);
  return (
    <SidebarContext.Provider
      value={{
        isLeftSidebarOpen,
        setIsLeftSidebarOpen,
        isRightSidebarOpen,
        setIsRightSidebarOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
