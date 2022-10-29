import React from "react";
import Square from "./Square";

export default function Board({ onClick, squares }) {
  return (
    <div className="grid grid-cols-3 w-24">
      {squares.map((value, index) => (
        <Square value={value} onClick={() => onClick(index)} key={index} />
      ))}
    </div>
  );
}
