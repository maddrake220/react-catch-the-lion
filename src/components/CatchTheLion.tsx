import { useEffect, useState } from "react";
import styled from "styled-components";
import Board from "./Board";
import DeadZone from "./DeadZone";
import GameAlert from "./GameAlert";
import { Piece, PlayerType } from "../types";

interface Props {
  height?: string;
}

const GameWrapper = styled.section``;

const Inner = styled.div<Props>`
  height: ${(props) => (props.height ? props.height : "1rem")};
`;

const initialBoard = [
  [{ position: { row: 0, col: 0 }, piece: "Giraffe" }, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
const Game = () => {
  const [board, setBoard] = useState(initialBoard);

  return (
    <GameWrapper className="container">
      <Inner />
      <GameAlert />
      <Inner />
      <DeadZone />
      <Inner />
      <Board board={board} />
      <Inner />
      <DeadZone />
    </GameWrapper>
  );
};

export default Game;
