function IconButton({ children, label, onClick, disabled = true }) {
  return (
    <button
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="rounded-lg p-1 transition 
                 text-woodsmoke-950 dark:text-white
                 hover:bg-woodsmoke-950/5 
                 dark:hover:bg-woodsmoke-900
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-woodsmoke-500 cursor-pointer"
    >
      {children}
    </button>
  );
}

export default IconButton;
