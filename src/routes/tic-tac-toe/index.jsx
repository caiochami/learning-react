import React from "react";
import Layout from "../../components/Layouts/Layout";
import Game from "../../components/TicTacToe/Game";

export default function Index() {
  return (
    <Layout title="Tic Tac Toe">
      <Game />
    </Layout>
  );
}
