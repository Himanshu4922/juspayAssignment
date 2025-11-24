import { Bell, History, PanelLeftDashed, Star, Sun } from "lucide-react";
import BreadCrumbs from "./BreadCrumbs";
import SearchBar from "./Searchbar";
import IconButton from "./IconButton";
import { useSidebar } from "../context/SidebarContext";
import { useRef } from "react";
import { useTheme } from "../context/ThemeProvider";

function Header() {
  const {
    isLeftSidebarOpen,
    setIsLeftSidebarOpen,
    isRightSidebarOpen,
    setIsRightSidebarOpen,
  } = useSidebar();
  const inputRef = useRef(null);
  const { isDark, setIsDark } = useTheme();
  // console.log("isDark :", isDark);
  return (
    <header className="border-b border-woodsmoke-950/10 dark:border-white/10 bg-white dark:bg-woodsmoke-950">
      <div className="w-full flex items-center justify-between px-4 py-2 sm:px-7 sm:py-5">
        {/* <div className="mx-auto flex max-w-[1440px] items-center justify-between px-7 py-5"> */}
        {/* buttons and bredcrumbs */}
        <div className="flex items-center gap-2">
          {/* buttons container */}
          <div className="flex gap-2 items-center">
            <IconButton
              label="Toggle Sidebar"
              onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
              disabled={false}
            >
              <PanelLeftDashed className="dark:text-white size-5 text-woodsmoke-950" />
            </IconButton>
            <IconButton
              label="Add to Favorites"
              className="cursor-pointer p-1 hover:bg-woodsmoke-950/5 dark:hover:bg-woodsmoke-900 rounded-md"
            >
              <Star className="dark:text-white size-5 text-woodsmoke-950" />
            </IconButton>
          </div>
          {/* breadcrumbs container */}
          <div className="sm:block hidden">
            <BreadCrumbs />
          </div>
        </div>
        {/* search bar and ctas */}
        <div className="flex items-center gap-5">
          {/* search input */}
          <div className="hidden md:block">
            <SearchBar
              enableShortcut={true}
              placeholder={"Search"}
              maxWidth={"max-w-40"}
              ref={inputRef}
              bgColor={"bg-woodsmoke-950/5"}
              border={"false"}
            />
          </div>
          <div className="flex items-center text-woodsmoke-950 dark:text-white gap-2">
            <IconButton
              label="Toggle Theme"
              onClick={() => setIsDark(!isDark)}
              disabled={false}
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-600" />
              ) : (
                <Sun size={20} className="text-woodsmoke-950" />
              )}
            </IconButton>
            <IconButton label="History">
              <History size={20} />
            </IconButton>
            <IconButton label="Notifications">
              <Bell size={20} />
            </IconButton>
            <IconButton
              label="Open Panel"
              disabled={false}
              onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
            >
              <PanelLeftDashed size={20} />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
