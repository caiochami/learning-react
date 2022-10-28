import React from "react";
import SimpleCard from "../../components/SimpleCard";
import Board from "../../components/TicTacToe/Board";

export default function Index() {
  return (
    <SimpleCard title="Tic Tac Toe">
      <Board />
    </SimpleCard>
  );
}
