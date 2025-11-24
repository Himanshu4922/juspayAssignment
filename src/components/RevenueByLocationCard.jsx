function RevenueByLocationCard({ name, revenue, maxRevenue }) {
  function formatToK(value) {
    if (!value && value !== 0) return "";

    if (value < 1000) return value.toString();

    const num = value / 1000;

    return Number.isInteger(num) ? `${num}k` : `${num.toFixed(1)}k`;
  }
  const progressPercentage = Math.min((revenue / maxRevenue) * 100, 100);
  return (
    <div>
      <div className="text-woodsmoke-950 text-xs flex justify-between leading-[18px] dark:text-white">
        <h3 className="text-inherit">{name}</h3>
        <p className="text-inherit">{formatToK(revenue)}</p>
      </div>
      {/* progressbar */}
      <div className="w-full h-1 bg-bar-light rounded-full overflow-hidden dark:bg-white/20">
        <div
          className={`bg-revenue-chart-previous h-full rounded-full `}
          style={{
            width: progressPercentage + "%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default RevenueByLocationCard;
