export enum PlayerType {
  UPPER = "UPPER",
  LOWER = "LOWER",
}

export interface Position {
  row: number;
  col: number;
}

export interface Piece {
  ownerType: PlayerType;
  currentPosition: Position;
}

export interface CellType {
  position: Position;
  piece: Piece;
}
