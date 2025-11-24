function ActivityCard({ cardItem, totalLength, i }) {
  const avatarURL = cardItem.avatarUrl;
  // console.log(totalLength);

  return (
    <div className="flex p-1 gap-2">
      <div className={`rounded-full self-start relative`}>
        <img
          className={`object-cover rounded-full align-top`}
          src={avatarURL}
        />
        {i !== totalLength - 1 && (
          <div className="absolute w-px h-3.5 dark:bg-white/10 bg-woodsmoke-950/10 -translate-x-1/2 left-1/2 top-[125%]"></div>
        )}
      </div>
      <div className={`flex min-w-0 flex-col`}>
        <h3
          className={`text-woodsmoke-950 text-sm truncate max-w-48 dark:text-white`}
        >
          {cardItem.message}
        </h3>
        <p className="text-left text-woodsmoke-950/40 text-xs leading-[18px] dark:text-white/40">
          {cardItem.time}
        </p>
      </div>
    </div>
  );
}

export default ActivityCard;
