"use strict";
exports.__esModule = true;
var board_1 = require("./board/board");
main();
function main() {
    InitGame();
}
function InitGame() {
    var board = new board_1.Board();
    board.InitBoards();
    console.log(board.board120);
    console.log(board.board64);
}
