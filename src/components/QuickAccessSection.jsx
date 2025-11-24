import { useLocation, useNavigate } from "react-router-dom";
import SwitchButton from "./SwitchButton";
import { useSidebar } from "../context/SidebarContext";

function QuickAccessSection({ activeTab, setActiveTab, tabs, activeItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { isLeftSidebarOpen, setIsLeftSidebarOpen } = useSidebar();

  if (!isLeftSidebarOpen) return null;

  function handleActiveOption(path) {
    navigate(path);
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  }
  return (
    <div
      className={`${
        isLeftSidebarOpen ? "" : "hidden"
      } bg-white rounded-lg dark:bg-woodsmoke-950`}
    >
      <div className="text-sm flex gap-2">
        {tabs.map((tab) => (
          <SwitchButton
            key={tab.key}
            isActive={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            buttonText={tab.label}
          />
        ))}
      </div>

      <div className="flex flex-col gap-1 mt-1 mb-3">
        {activeItems.map((item) => {
          const isItemActive = location.pathname === item.slug;
          return (
            <button
              key={item.slug}
              onClick={() => handleActiveOption(item.slug)}
              className="flex gap-2 items-center cursor-pointer py-1 px-2 hover:bg-woodsmoke-950/5 rounded-md transition-all duration-200 leading-6 dark:text-white dark:hover:bg-woodsmoke-900"
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  isItemActive
                    ? "bg-woodsmoke-950 dark:bg-white"
                    : "bg-woodsmoke-950/20 dark:bg-white/20"
                }`}
              ></div>
              <p className="text-sm text-woodsmoke-950 dark:text-white">
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuickAccessSection;
