import { useEffect, useState } from "react";
import worldMap from "../assets/worldMap.svg";
import worldMapDark from "../assets/WorldMapDark.svg";
import { useTheme } from "../context/ThemeProvider";

export default function RevenueWorldMap() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await fetch("/revenueByLocationData.json");

        if (!res.ok) {
          throw new Error("Failed to load location data");
        }

        const data = await res.json();
        setLocations(data.locations);
      } catch (err) {
        console.error("Error loading map data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px] text-gray-500">
        Loading map...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Failed to load map data.</div>
    );
  }

  return (
    <div className="relative max-w-fit mx-auto">
      <div className="w-full h-auto">
        <img
          src={isDark ? worldMapDark : worldMap}
          alt="World Map"
          className="w-full h-auto max-h-[82px] mx-auto"
        />
      </div>

      {locations.map((loc) => (
        <div
          key={loc.id}
          title={`${loc.name} - $${loc.revenue}`}
          className="absolute w-2 h-2 bg-woodsmoke-950 rounded-full border border-white dark:bg-[#c6c7f8]"
          style={{
            left: loc.x,
            top: loc.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
