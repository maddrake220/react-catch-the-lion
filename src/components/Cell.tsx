import React from "react";
import { CellType } from "../types";

interface CellProps {
  cell: CellType;
  position: {
    row: number;
    col: number;
  };
}
const Cell: React.FC<CellProps> = ({ cell, position }) => {
  return (
    <div>
      {cell.position?.row === position?.row &&
      cell.position?.col === position?.col
        ? cell.piece
        : ""}
    </div>
  );
};

export default Cell;
