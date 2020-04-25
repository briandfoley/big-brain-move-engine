import { Board } from "./board/board";

function main() {
  InitGame();
}

function InitGame() {
  let board: Board = new Board();
  board.InitBoards();
}
