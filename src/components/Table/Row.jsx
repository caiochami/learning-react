import React from "react";

export default function Row({ children, ...props }) {
  return (
    <td
      {...props}
      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
    >
      {children}
    </td>
  );
}
