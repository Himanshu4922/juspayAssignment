import { useSidebar } from "../context/SidebarContext";

function RightSidebarSection({ title, items, CardComponent }) {
  const { isRightSidebarOpen } = useSidebar();
  const totalLength = items?.length;
  return (
    <div
      className={`flex flex-col gap-2 ${isRightSidebarOpen ? "" : "hidden"}`}
    >
      <div className="text-woodsmoke-950 text-sm py-2 px-1 font-semibold dark:text-white">
        {title}
      </div>
      <div className={`flex flex-col gap-2`}>
        {items?.map((item, index) => (
          <CardComponent
            cardItem={item}
            key={index}
            totalLength={totalLength}
            i={index}
          />
        ))}
      </div>
    </div>
  );
}

export default RightSidebarSection;
