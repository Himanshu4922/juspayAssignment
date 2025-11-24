import { useEffect, useRef } from "react";
import { Search, Command } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange = () => {},
  enableShortcut = false,
  placeholder = "Search",
  maxWidth = "max-w-40",
  ref,
  bgColor,
  border,
}) {
  // const inputRef = useRef(null);

  useEffect(() => {
    if (!enableShortcut) return;
    const handleKeyDown = (e) => {
      if ((e.metaKey && e.key === "/") || (!e.metaKey && e.key === "/")) {
        e.preventDefault();
        ref.current?.focus();
      }

      if (e.key === "Escape") {
        ref.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`relative w-full ${maxWidth} flex items-center`}>
      <Search
        className="absolute left-2 top-1/2 -translate-y-1/2 text-woodsmoke-950/20 dark:text-white/20"
        size={16}
      />

      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full rounded-lg 
          ${bgColor} dark:bg-white/10
          px-7 py-1 pr-9
          text-sm text-woodsmoke-950 dark:text-white
          placeholder:text-woodsmoke-950/20
          focus:outline-none focus:ring-1 focus:ring-woodsmoke-950/10 dark:focus:ring-white/20
           ${border} dark:placeholder:text-white/20`}
      />

      {enableShortcut && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center text-sm text-woodsmoke-950/20 dark:text-white/20">
          <Command size={16} />
          <span className="-mt-px">/</span>
        </div>
      )}
    </div>
  );
}
