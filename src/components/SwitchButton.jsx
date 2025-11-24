import React from "react";

function SwitchButton({ isActive, onClick, buttonText }) {
  return (
    <button
      className={`py-1 px-2 cursor-pointer hover:bg-woodsmoke-950/5 rounded-md transition-colors duration-300 ease-in-out dark:hover:bg-woodsmoke-900 ${
        isActive
          ? "text-woodsmoke-950/40 dark:text-white/40"
          : "text-woodsmoke-950/20 dark:text-white/20"
      } leading-5`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default SwitchButton;
