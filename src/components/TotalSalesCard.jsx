function TotalSalesCard({ name, value, circleColor }) {
  //   console.log(circleColor);

  return (
    <div className="flex justify-between items-center text-xs leading-5 dark:text-white">
      <div className="flex items-center px-2 py-0.5 dark:text-white">
        <div
          className={`w-1.5 h-1.5 rounded-full ${circleColor} shrink-0 mr-[5px] min-w-1.5 min-h-1.5`}
        ></div>

        <h3 className="text-inherit">{name}</h3>
      </div>
      <p className="min-w-[53px] text-left text-inherit">${value.toFixed(2)}</p>
    </div>
  );
}

export default TotalSalesCard;
