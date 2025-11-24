import { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useTheme } from "../context/ThemeProvider";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const currentData = payload.find(
      (p) => p.dataKey === "currentWeek" || p.dataKey === "forecast"
    );
    const previousData = payload.find((p) => p.dataKey === "previousWeek");

    const currentValue = currentData ? currentData.value : null;

    return (
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-xl text-sm">
        <p className="font-semibold text-woodsmoke-950 mb-1">Month: {label}</p>
        {currentValue !== null && (
          <p className="text-woodsmoke-950">
            Current Week: <span>${currentValue}M</span>
          </p>
        )}
        {previousData && (
          <p className="text-revenue-chart-previous">
            Previous Week: <span>${previousData.value}M</span>
          </p>
        )}
      </div>
    );
  }
  return null;
};

function RevenueChart() {
  const [chartData, setChartData] = useState([]);
  const [summaryValues, setSummaryValues] = useState({
    currentWeekValue: "",
    previousWeekValue: "",
  });
  const { isDark } = useTheme();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/revenueChartData.json");

        if (!response.ok) {
          throw new Error("Failed to fetch data.json");
        }

        const data = await response.json();
        console.log(data);
        setChartData(data.chartData);
        setSummaryValues(data.summary);
      } catch (error) {
        console.error("Failed to fetch revenue data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  const yAxisTickFormatter = (value) => `${value}M`;

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div className="bg-card-light rounded-2xl h-full p-6 flex flex-col gap-4 justify-between dark:bg-white/5">
      <div className="flex gap-4">
        <h3 className="text-sm font-semibold text-woodsmoke-950 dark:text-white">
          Revenue
        </h3>
        {/* verical line */}
        <div className="w-px h-5 bg-woodsmoke-950/20 dark:bg-white/20"></div>

        <div className="flex gap-4">
          {/* weekly revenue status */}
          <div className="py-0.5 pl-1 pr-2 flex items-center">
            {/* circle */}
            <div className="w-1.5 h-1.5 bg-woodsmoke-950 rounded-full aspect-square max-[716px]:self-start max-[716px]:my-1 dark:bg-[#C6C7F8]"></div>
            <div className="text-woodsmoke-950 text-xs ml-1.5 dark:text-white">
              Current Week{" "}
              <span className="font-semibold">
                ${summaryValues?.currentWeekValue}
              </span>
            </div>
          </div>

          {/* weekly revenue status */}
          <div className="py-0.5 pl-1 pr-2 flex items-center">
            <div className="w-1.5 h-1.5 bg-revenue-chart-previous rounded-full aspect-square max-[716px]:self-start max-[716px]:my-1"></div>
            <div className="text-woodsmoke-950 text-xs ml-1.5 dark:text-white">
              Previous Week{" "}
              <span className="font-semibold">
                ${summaryValues?.previousWeekValue}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* chart area */}
      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={chartData}
          margin={{
            bottom: 0,
            left: 0,
            right: 10, //i changed it later so if any issue check
            top: 10,
          }}
          lineGap={10}
        >
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke={!isDark ? "rgba(28, 28, 28, 0.1)" : "#FFFFFF66"}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            padding={{ left: 40, right: 10 }}
            tick={{
              fill: isDark ? "#FFFFFF66" : "rgba(28, 28, 28, 0.4)",
              fontSize: 12,
              lineHeight: "18",
            }}
            tickMargin={10}
          />

          <YAxis
            domain={[0, 30]}
            axisLine={false}
            tickLine={false}
            tickFormatter={yAxisTickFormatter}
            tick={{
              fill: isDark ? "#FFFFFF66" : "rgba(28, 28, 28, 0.4)",
              fontSize: 12,
              lineHeight: "18",
            }}
            width={33}
            ticks={[0, 10, 20, 30]}
          />

          <Tooltip cursor={{ strokeWidth: 0 }} content={<CustomTooltip />} />

          <Line
            type="monotone"
            dataKey="previousWeek"
            stroke="#a8c5da"
            isAnimationActive={false}
            strokeWidth={3}
            dot={false}
          />

          <Line
            type="monotone"
            dataKey="currentWeek"
            stroke={`${isDark ? "#C6C7F8" : "#1c1c1c"}`}
            strokeWidth={3}
            dot={false}
            isAnimationActive={false}
            connectNulls={true}
          />

          <Line
            type="monotone"
            dataKey="forecast"
            // stroke="#1c1c1c"
            stroke={`${isDark ? "#C6C7F8" : "#1c1c1c"}`}
            strokeWidth={3}
            strokeDasharray="5 5"
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
