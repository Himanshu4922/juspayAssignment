import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useWindowWidth from "../hooks/UseWindowWidth";
import { useTheme } from "../context/ThemeProvider";

const PROJECTIONS_DATA = [
  { month: "Jan", actual: 17, projection: 4, total: 20 },
  { month: "Feb", actual: 20, projection: 5, total: 25 },
  { month: "Mar", actual: 17, projection: 4, total: 21 },
  { month: "Apr", actual: 22, projection: 6, total: 28 },
  { month: "May", actual: 14, projection: 4, total: 18 },
  { month: "Jun", actual: 20, projection: 5, total: 25 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const actualData = payload.find((p) => p.dataKey === "actual");
    const projectionData = payload.find((p) => p.dataKey === "projection");

    const actualValue = actualData ? actualData.value : 0;
    const projectionValue = projectionData ? projectionData.value : 0;

    return (
      <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-xl text-sm">
        <p className="font-semibold text-woodsmoke-950 mb-1">Month: {label}</p>
        <p className="text-[#5B7FA0]">Actual: ${actualValue}M</p>
        <p className="text-[#9BB6C7]">
          Projected: ${actualValue + projectionValue}M
        </p>
      </div>
    );
  }
  return null;
};

const ProjectionsVsActualsChart = () => {
  const yAxisTickFormatter = (value) => `${value}M`;
  const width = useWindowWidth();
  //   console.log(width);
  const { isDark } = useTheme();

  let barSize = 20;
  // let barGap = 6;
  if (width > 768) {
    barSize = 20;
  } else {
    barSize = 15;
  }

  return (
    <div className="bg-card-light rounded-2xl h-full p-6 flex flex-col gap-4 justify-between dark:bg-white/5">
      <h3 className="text-sm font-semibold text-woodsmoke-950 dark:text-white">
        Projections vs Actuals
      </h3>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={PROJECTIONS_DATA}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          barSize={barSize}
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
            padding={{ left: 10, right: 10 }}
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
              // fill: "rgba(28, 28, 28, 0.4)",
              fill: isDark ? "#FFFFFF66" : "rgba(28, 28, 28, 0.4)",
              fontSize: 12,
              lineHeight: "18",
            }}
            width={33}
            ticks={[0, 10, 20, 30]}
          />

          <Tooltip
            cursor={{ fill: "#f3f4f6", opacity: 0 }}
            content={<CustomTooltip />}
          />

          <Bar
            dataKey="actual"
            stackId="a"
            fill="#a8c5da"
            radius={[0, 0, 0, 0]}
          />

          <Bar
            dataKey="projection"
            stackId="a"
            fill="rgba(168, 197, 218, 0.4)"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionsVsActualsChart;
