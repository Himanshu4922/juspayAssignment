import { useEffect, useState } from "react";
import TotalSalesCard from "./TotalSalesCard";
import TotalSalesChart from "./TotalSalesChart";

function TotalSales() {
  const [totalSalesData, setTotalSalesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const colorClass = {
    Direct: "bg-woodsmoke-950 dark:bg-[#C6C7F8]",
    Affiliate: "bg-segment-mint",
    Sponsored: "bg-segment-indigo",
    "E-mail": "bg-segment-blue",
  };

  useEffect(() => {
    const fetchTotalSalesData = async () => {
      try {
        const response = await fetch("/totalSalesData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch total sales data");
        }
        const data = await response.json();
        // console.log(data);
        setTotalSalesData(data.totalSales);
      } catch (error) {
        console.error("Error fetching total sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTotalSalesData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        Loading total sales...
      </div>
    );
  }

  return (
    <div className="p-6 bg-card-light rounded-2xl h-full flex gap-4 sm:flex-col flex-row justify-between sm:justify-normal dark:bg-white/5">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold text-woodsmoke-950 leading-5 text-center sm:text-left dark:text-white">
          Total Sales
        </h3>
        {/* chart */}
        <TotalSalesChart
          totalSalesData={totalSalesData}
          colorClass={colorClass}
        />
      </div>
      {/* total sales cards */}
      <div className="flex-1 grow grid grid-cols-1 gap-2.5 sm:w-full">
        {totalSalesData.map((item, index) => (
          <TotalSalesCard
            key={index}
            name={item.name}
            value={item.value}
            circleColor={colorClass[item.name]}
          />
        ))}
      </div>
    </div>
  );
}

export default TotalSales;
