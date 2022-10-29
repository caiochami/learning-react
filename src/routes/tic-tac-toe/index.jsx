import React from "react";
import SimpleCard from "../../components/SimpleCard";
import Game from "../../components/TicTacToe/Game";

export default function Index() {
  return (
    <SimpleCard title="Tic Tac Toe">
      <Game />
    </SimpleCard>
  );
}
