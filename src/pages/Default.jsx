import MetricCard from "../components/MetricCard";
import ProjectionsVsActualsChart from "./../components/ProjectionsVsActualsChart";
import RevenueChart from "./../components/RevenueChart";
import RevenueByLocation from "./../components/RevenueByLocation";
import TopSellingProducts from "./../components/TopSellingProducts";
import TotalSales from "./../components/TotalSales";
const METRIC_DATA = [
  {
    id: 1,
    title: "Customers",
    value: "3,781",
    change: 11.01,
    trend: "up",
    icon: "User",
  },
  {
    id: 2,
    title: "Orders",
    value: "1,219",
    change: 0.03,
    trend: "down",
    icon: "ShoppingCart",
  },
  {
    id: 3,
    title: "Revenue",
    value: "$695",
    change: 15.03,
    trend: "up",
    icon: "CreditCard",
  },
  {
    id: 4,
    title: "Growth",
    value: "30.1%",
    change: 6.08,
    trend: "up",
    icon: "Activity",
  },
];

function Default() {
  return (
    <main className="p-4 md:p-7 w-full bg-white dark:bg-woodsmoke-950 min-h-full">
      <h1 className="px-2 py-1 text-sm text-woodsmoke-950 font-semibold dark:text-white">
        eCommerce
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-6 md:gap-7 gap-4 sm:mt-4 mt-2 ">
        {/* metric cards */}
        <div className="grid grid-cols-2 md:gap-7 sm:col-span-3 gap-4">
          {METRIC_DATA.map((metric) => (
            <MetricCard key={metric.id} {...metric} />
          ))}
        </div>
        {/* bar graphs */}
        <div className="sm:col-span-3 sm:h-full h-72">
          <ProjectionsVsActualsChart />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_202px] sm:col-span-6 md:gap-7 gap-4">
          <div className="h-72 sm:h-full">
            <RevenueChart />
          </div>
          <div className="h-full">
            <RevenueByLocation />
          </div>
        </div>

        <div className="grid sm:grid-cols-[1fr_202px] sm:col-span-6 md:gap-7 gap-4">
          <div className="h-full">
            <TopSellingProducts />
          </div>

          <div className="h-full">
            <TotalSales />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Default;

// header done
// metric cards done
// bar graph done
// revenue chart done
// revenue by location done
