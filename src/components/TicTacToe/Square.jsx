import React from "react";

export default function Square({ value, onClick }) {
  return (
    <div
      className="border text-center cursor-pointer h-8 w-8"
      onClick={onClick}
    >
      {value}
    </div>
  );
}
