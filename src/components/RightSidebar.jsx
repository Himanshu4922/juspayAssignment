import { useEffect, useState } from "react";
import { useSidebar } from "../context/SidebarContext";
import RightSidebarSection from "./RightSidebarSection";
import NotificationCard from "./NotificationCard";
import ActivityCard from "./ActivityCard";
import ContactCard from "./ContactCard";

function RightSidebar() {
  const [rightSidebarData, setRightSidebarData] = useState({});
  const [loading, setLoading] = useState(true);
  const { isRightSidebarOpen } = useSidebar();

  useEffect(() => {
    async function fetchSidebarData() {
      try {
        const resp = await fetch("/engagementData.json");
        if (!resp.ok) {
          throw new Error("Failed to fetch engagement data");
        }
        const data = await resp.json();
        setRightSidebarData(data);
      } catch (error) {
        console.error("Error fetching engagement data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSidebarData();
  }, []);

  return (
    <aside className="bg-white dark:bg-woodsmoke-950 min-h-full border-l border-woodsmoke-950/10 dark:border-white/10">
      <nav
        className={`flex flex-col h-full gap-4 ${
          isRightSidebarOpen ? "p-4" : "p-0"
        }`}
      >
        <RightSidebarSection
          title={"Notifications"}
          items={rightSidebarData.notifications}
          CardComponent={NotificationCard}
        />
        <RightSidebarSection
          title={"Activities"}
          items={rightSidebarData.activities}
          CardComponent={ActivityCard}
        />
        <RightSidebarSection
          title={"Contacts"}
          items={rightSidebarData.contacts}
          CardComponent={ContactCard}
        />
      </nav>
    </aside>
  );
}

export default RightSidebar;
