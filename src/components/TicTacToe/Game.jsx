import React from "react";
import { useState } from "react";
import { calculateWinner } from "../../utils/helpers";
import Board from "./Board";
import Move from "./Move";

export default function Game() {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);

  const [xIsNext, setXIsNext] = useState(true);

  const [stepNumber, setStepNumber] = useState(0);

  const current = history[history.length - 1];

  const winner = calculateWinner(current.squares);

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  function handleClick(index) {
    const updatedHistory = history.slice(0, stepNumber + 1);

    const current = updatedHistory[stepNumber];

    const newSquares = [...current.squares];

    if (winner || newSquares[index]) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "O";

    setHistory(updatedHistory.concat([{ squares: newSquares }]));

    setXIsNext(!xIsNext);

    setStepNumber(updatedHistory.length);
  }

  function jumpTo(move) {
    setStepNumber(move);

    setXIsNext(move % 2 === 0);
  }

  console.log(history);

  return (
    <div className="flex flex-row gap-2 mt-2">
      <div className="game-board">
        <Board
          onClick={(index) => handleClick(index)}
          squares={current.squares}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {history.map((step, move) => (
            <Move
              selected={move === stepNumber}
              move={move}
              key={move}
              jumpTo={() => jumpTo(move)}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}
