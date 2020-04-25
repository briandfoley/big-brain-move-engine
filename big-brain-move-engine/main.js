"use strict";
exports.__esModule = true;
var board_1 = require("./board/board");
function main() {
    InitGame();
}
function InitGame() {
    var board = new board_1.Board();
    board.InitBoards();
    console.log(board);
}
