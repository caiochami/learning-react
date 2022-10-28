import React from "react";
import Square from "./Square";

export default function Board() {
  const status = "Next player: X";

  return (
    <div>
      <div className="mb-2">{status}</div>
      <div className="grid grid-cols-3 w-24">
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
}
