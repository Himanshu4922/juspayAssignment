import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

export default function RecursiveSidebarItem({ item, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsLeftSidebarOpen } = useSidebar();
  //   console.log(item);
  const Icon = item.icon;
  //   console.log(Icon);
  const navigate = useNavigate();

  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  function handleClick() {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      //   setCurrentPage(item.slug);
      navigate(item.slug);
      setIsLeftSidebarOpen(false);
      //   console.log("running");
    }
  }
  const location = useLocation();
  const isSelected =
    location.pathname === item.slug || location.pathname.endsWith(item.slug);
  //   console.log("isSelected: ", currentPage);
  //   console.log("slug: ", item.slug);

  return (
    <>
      <button
        // onClick={() => hasChildren && setIsOpen(!isOpen)}
        onClick={handleClick}
        className={`relative flex items-center gap-1 w-full cursor-pointer py-1 px-2 rounded-md
  bg-white
  dark:bg-woodsmoke-950
  hover:bg-woodsmoke-950/5
  dark:hover:bg-woodsmoke-900
  dark:text-white
  ${!hasChildren ? (depth === 0 ? "pl-7" : "pl-12") : ""}
  ${isSelected ? "bg-woodsmoke-950/5 dark:bg-white/10" : ""}
`}
        aria-expanded={isOpen}
      >
        {isSelected && (
          <div className="absolute left-0 top-1/2 h-4 w-1 bg-woodsmoke-950 rounded-lg -translate-y-1/2 dark:bg-[#C6C7F8]"></div>
        )}

        {hasChildren && (
          <div>
            <ChevronRight
              className={`size-4 text-woodsmoke-950/20 dark:text-white/20 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </div>
        )}

        {depth === 0 && Icon && (
          <Icon className="w-4 h-4 text-woodsmoke-950 dark:text-white" />
        )}

        <span className="text-sm text-woodsmoke-950 dark:text-white">
          {item.label}
        </span>
      </button>

      {hasChildren && isOpen && (
        <>
          {item.children.map((child) => (
            <RecursiveSidebarItem
              key={child.slug}
              item={child}
              depth={depth + 1}
            />
          ))}
        </>
      )}
    </>
  );
}
