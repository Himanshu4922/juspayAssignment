import { useEffect, useState } from "react";
import RevenueWorldMap from "./RevenueWorldMap";
import RevenueByLocationCard from "./RevenueByLocationCard";

function RevenueByLocation() {
  const [revenueByLocationData, setRevenueByLocationData] = useState([]);

  useEffect(() => {
    const fetchRevenueByLocationData = async () => {
      try {
        const res = await fetch("/revenueByLocationData.json");
        if (!res.ok) {
          throw new Error("Failed to fetch revenue by location data");
        }
        const data = await res.json();
        setRevenueByLocationData(data.locations);
      } catch (err) {
        console.error("Error fetching revenue by location data:", err);
      }
    };

    fetchRevenueByLocationData();
  }, []);

  return (
    <div className="bg-card-light rounded-2xl p-6 flex sm:flex-col gap-4 justify-between h-full flex-row dark:bg-white/5">
      <div className="flex flex-col gap-4">
        <div className="text-woodsmoke-950 font-semibold text-sm leading-5 text-center dark:text-white">
          Revenue by Location
        </div>
        <div>
          <RevenueWorldMap />
        </div>
      </div>
      {/* revenue cards */}
      <div className="flex-1 grow grid grid-cols-1 gap-4">
        {revenueByLocationData.map((location) => (
          <RevenueByLocationCard
            key={location.id}
            name={location.name}
            revenue={location.revenue}
            maxRevenue={location.maxRevenue}
          />
        ))}
      </div>
    </div>
  );
}

export default RevenueByLocation;
