import React from "react";
import { useState } from "react";
import { calculateWinner } from "../../utils/helpers";
import Square from "./Square";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(index) {
    const newSquares = [...squares];

    if (winner || squares[index]) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "O";

    setSquares(newSquares);

    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div className="mb-2">{status}</div>
      <div className="grid grid-cols-3 w-24">
        {squares.map((value, index) => (
          <Square
            value={value}
            onClick={() => handleClick(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
