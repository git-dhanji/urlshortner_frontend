function Button({
  onClick,
  className = "",
  title = "Button",
  text = "Click Me",
  id = "",
  type = "button",
  disabled = false,
  loading = false,
  icon = null,
  ariaLabel = undefined,
}) {
  return (
    <button
      onClick={onClick}
      id={id}
      type={type}
      disabled={disabled || loading}
      aria-label={ariaLabel || text}
      className={`relative flex items-center justify-center gap-2 px-4 py-2 rounded font-semibold border transition focus:outline-none focus:ring-2 dark:bg-indigo-500 dark:text-amber-50 focus:ring-offset-2 shadow-sm cursor-pointer font-space-gro
        ${
          disabled || loading
            ? "opacity-60 cursor-not-allowed bg-cyan-100"
            : "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
        }
        ${className}`}
      title={title}
      tabIndex={0}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4 mr-2 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          ></path>
        </svg>
      )}
      {icon && <span className="mr-1">{icon}</span>}
      <span>{loading ? "Please wait..." : text}</span>
    </button>
  );
}
export default Button;
