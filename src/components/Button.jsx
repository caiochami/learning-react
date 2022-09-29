export default function Button({
  onClick = null,
  color = "primary",
  size = "md",
  className = "",
  children,
}) {
  const sizes = {
    xs: "px-2.5 py-1.5 text-xs",
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-2 text-base",
    xl: "px-6 py-3 text-base",
  };

  const colors = {
    primary: "bg-indigo-700 hover:bg-indigo-600 focus:ring-indigo-500",
    danger: "bg-red-700 hover:bg-red-600 focus:ring-red-500",
    warning: "bg-yellow-700 hover:bg-yellow-600 focus:ring-yellow-500",
    secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-gray-500",
    success: "bg-green-700 hover:bg-green-600 focus:ring-green-500",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${sizes[size]} ${className} inline-flex items-center rounded border border-transparent font-medium text-white ${colors[color]} focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {children}
    </button>
  );
}
