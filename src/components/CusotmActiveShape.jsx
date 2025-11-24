import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Sector,
} from "recharts";

const CustomActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;

  const midAngle = (startAngle + endAngle) / 2;
  const gap = 8; // Controls the inward curve strength

  return (
    <g>
      {/* Main Outer Arc */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius + gap}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        cornerRadius={20}
      />

      {/* Inner Cut-Out Layer → Creates Inward Curve */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={innerRadius + gap}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#F9FAFB"
      />
    </g>
  );
};
export default CustomActiveShape;