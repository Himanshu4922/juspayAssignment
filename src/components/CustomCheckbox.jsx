function CustomCheckbox({ checked, onChange, disabled = false }) {
  const baseClasses =
    "w-4 h-4 border rounded transition-border flex items-center justify-center";
  const checkedClasses = "bg-black border-transparent dark:bg-[#C6C7F8]";
  const uncheckedClasses =
    "bg-white border-woodsmoke-950/20 hover:border-woodsmoke-950/40 dark:bg-woodsmoke-950 dark:border-white/20 dark:hover:border-white/40";

  return (
    <label className="cursor-pointer relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="sr-only" // Hide the native checkbox
      />
      <div
        className={`${baseClasses} ${
          checked ? checkedClasses : uncheckedClasses
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {checked && (
          <svg
            className="w-4 h-4 text-white dark:text-woodsmoke-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </label>
  );
}

export default CustomCheckbox;
