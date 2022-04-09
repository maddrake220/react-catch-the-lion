import styled from "styled-components";
import Cell from "./Cell";

const BoardWrapper = styled.section`
  height: 28rem;
  div {
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    > div {
      box-sizing: border-box;
      width: 6rem;
      height: 6rem;
      border: 1px dashed black;
    }
  }
`;

type BoardProps = {
  board: any[][];
};

const Board: React.FC<BoardProps> = ({ board }) => {
  console.log(board);
  return (
    <BoardWrapper>
      {board.map((v, row) => (
        <div key={row}>
          {v.map((cell, col) => (
            <Cell key={col} cell={cell} position={{ row, col }} />
          ))}
        </div>
      ))}
    </BoardWrapper>
  );
};

export default Board;
