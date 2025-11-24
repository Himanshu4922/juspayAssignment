import { Bug, Radio, UserRound } from "lucide-react";
import React from "react";

function NotificationCard({ cardItem }) {
  console.log(cardItem);
  const notificationType = cardItem.type;
  const colorAndIconClass = {
    bug: {
      bgColor: "bg-card-blue",
      icon: Bug,
    },
    new_user: {
      bgColor: "bg-card-purple",
      icon: UserRound,
    },
    subscribed: {
      bgColor: "bg-card-purple",
      icon: Radio,
    },
  };
  const IconComp = colorAndIconClass[notificationType].icon;
  return (
    <div className="flex p-1 gap-2">
      {/* emoji */}
      <div
        className={`rounded-lg p-1 ${colorAndIconClass[notificationType].bgColor} self-start`}
      >
        {<IconComp className={`size-4 text-woodsmoke-950`} />}
      </div>
      {/* message and status */}
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

export default NotificationCard;
