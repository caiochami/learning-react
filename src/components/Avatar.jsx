import React from "react";

export default function Avatar({ size = "md", children }) {
  const sizes = {
    xs: "text-xl h-6 w-6",
    sm: "text-sm h-8 w-8",
    md: "w-10 h-10",
    lg: "text-lg h-12 w-12",
    xl: "text-xl h-14 w-14",
  };

  return (
    <span
      className={`${sizes[size]} font-medium leading-none text-white inline-flex items-center justify-center rounded-full bg-gray-500`}
    >
      {children}
    </span>
  );
}
