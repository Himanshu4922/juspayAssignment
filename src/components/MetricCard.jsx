import { TrendingDown, TrendingUp } from "lucide-react";

function MetricCard({ title, value, change, trend }) {
  const isUp = trend === "up";
  const colorClass =
    title === "Customers"
      ? "bg-card-blue"
      : title === "Orders" || title === "Revenue"
      ? "bg-card-light dark:bg-white/5 dark:text-white"
      : " bg-card-purple";

  return (
    <div
      className={`p-4 md:p-6 rounded-2xl ${colorClass} flex flex-col gap-2 justify-between text-woodsmoke-950`}
    >
      <h1 className="text-inherit font-semibold text-sm">{title}</h1>
      <div className="text-inherit flex items-center justify-between max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-1">
        <p className="text-xl font-semibold md:text-2xl leading-9">{value}</p>
        <div className="flex gap-1 items-center">
          <p className="text-xs ">
            {isUp ? "+" : "-"}
            {change}
          </p>
          <div>
            {isUp ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} className="scale-x-[-1]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetricCard;
