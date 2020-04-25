import { Board } from "./board/board";

main();

function main() {
  InitGame();
}

function InitGame() {
  let board: Board = new Board();
  board.InitBoards();
  console.log(board.board120);
  console.log(board.board64);
}
