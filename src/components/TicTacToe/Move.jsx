import React from "react";

export default function Move({ jumpTo, move, selected }) {
  const description = move ? `Got to move #${move}` : "Got to game start";

  return (
    <li className="hover:bg-gray-100 px-2">
      <button onClick={jumpTo}>
        <span className={selected ? "text-bold" : "text-xs"}>
          {description}
        </span>
      </button>
    </li>
  );
}
