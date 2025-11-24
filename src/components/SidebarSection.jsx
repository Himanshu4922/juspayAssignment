import { useSidebar } from "../context/SidebarContext";
import RecursiveSidebarItem from "./RecursiveSidebarItem";

export default function SidebarSection({ title, items }) {
  const { isLeftSidebarOpen } = useSidebar();
  //   console.log("onPageChange:", onPageChange);
  return (
    <div className={`${isLeftSidebarOpen ? "" : "hidden"}`}>
      <div className="text-sm flex gap-2 text-woodsmoke-950/40 py-1 px-3 dark:text-white/40">
        {title}
      </div>
      <div className="flex flex-col gap-1">
        {items.map((item) => (
          <RecursiveSidebarItem key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}
