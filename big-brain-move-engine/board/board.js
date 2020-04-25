"use strict";
exports.__esModule = true;
var Piece;
(function (Piece) {
    Piece[Piece["EMPTY"] = 0] = "EMPTY";
    Piece[Piece["wP"] = 1] = "wP";
    Piece[Piece["wN"] = 2] = "wN";
    Piece[Piece["wB"] = 3] = "wB";
    Piece[Piece["wR"] = 4] = "wR";
    Piece[Piece["wQ"] = 5] = "wQ";
    Piece[Piece["wK"] = 6] = "wK";
    Piece[Piece["bP"] = 7] = "bP";
    Piece[Piece["bN"] = 8] = "bN";
    Piece[Piece["bB"] = 9] = "bB";
    Piece[Piece["bR"] = 10] = "bR";
    Piece[Piece["bQ"] = 11] = "bQ";
    Piece[Piece["bK"] = 12] = "bK";
})(Piece = exports.Piece || (exports.Piece = {}));
;
var File;
(function (File) {
    File[File["FILE_NONE"] = 0] = "FILE_NONE";
    File[File["FILE_A"] = 1] = "FILE_A";
    File[File["FILE_B"] = 2] = "FILE_B";
    File[File["FILE_C"] = 3] = "FILE_C";
    File[File["FILE_D"] = 4] = "FILE_D";
    File[File["FILE_E"] = 5] = "FILE_E";
    File[File["FILE_F"] = 6] = "FILE_F";
    File[File["FILE_G"] = 7] = "FILE_G";
    File[File["FILE_H"] = 8] = "FILE_H";
})(File = exports.File || (exports.File = {}));
;
var Rank;
(function (Rank) {
    Rank[Rank["RANK_NONE"] = 0] = "RANK_NONE";
    Rank[Rank["RANK_1"] = 1] = "RANK_1";
    Rank[Rank["RANK_2"] = 2] = "RANK_2";
    Rank[Rank["RANK_3"] = 3] = "RANK_3";
    Rank[Rank["RANK_4"] = 4] = "RANK_4";
    Rank[Rank["RANK_5"] = 5] = "RANK_5";
    Rank[Rank["RANK_6"] = 6] = "RANK_6";
    Rank[Rank["RANK_7"] = 7] = "RANK_7";
    Rank[Rank["RANK_8"] = 8] = "RANK_8";
})(Rank = exports.Rank || (exports.Rank = {}));
;
var Color;
(function (Color) {
    Color[Color["WHITE"] = 0] = "WHITE";
    Color[Color["BLACK"] = 1] = "BLACK";
    Color[Color["BOTH"] = 2] = "BOTH";
})(Color = exports.Color || (exports.Color = {}));
;
var Castle;
(function (Castle) {
    Castle[Castle["WKCA"] = 1] = "WKCA";
    Castle[Castle["WQCA"] = 2] = "WQCA";
    Castle[Castle["BKCA"] = 4] = "BKCA";
    Castle[Castle["BQCA"] = 8] = "BQCA";
})(Castle = exports.Castle || (exports.Castle = {}));
;
var Square;
(function (Square) {
    Square[Square["A1"] = 21] = "A1";
    Square[Square["B1"] = 22] = "B1";
    Square[Square["C1"] = 23] = "C1";
    Square[Square["D1"] = 24] = "D1";
    Square[Square["E1"] = 25] = "E1";
    Square[Square["F1"] = 26] = "F1";
    Square[Square["G1"] = 27] = "G1";
    Square[Square["H1"] = 28] = "H1";
    Square[Square["A2"] = 31] = "A2";
    Square[Square["B2"] = 32] = "B2";
    Square[Square["C2"] = 33] = "C2";
    Square[Square["D2"] = 34] = "D2";
    Square[Square["E2"] = 35] = "E2";
    Square[Square["F2"] = 36] = "F2";
    Square[Square["G2"] = 37] = "G2";
    Square[Square["H2"] = 38] = "H2";
    Square[Square["A3"] = 41] = "A3";
    Square[Square["B3"] = 42] = "B3";
    Square[Square["C3"] = 43] = "C3";
    Square[Square["D3"] = 44] = "D3";
    Square[Square["E3"] = 45] = "E3";
    Square[Square["F3"] = 46] = "F3";
    Square[Square["G3"] = 47] = "G3";
    Square[Square["H3"] = 48] = "H3";
    Square[Square["A4"] = 51] = "A4";
    Square[Square["B4"] = 52] = "B4";
    Square[Square["C4"] = 53] = "C4";
    Square[Square["D4"] = 54] = "D4";
    Square[Square["E4"] = 55] = "E4";
    Square[Square["F4"] = 56] = "F4";
    Square[Square["G4"] = 57] = "G4";
    Square[Square["H4"] = 58] = "H4";
    Square[Square["A5"] = 61] = "A5";
    Square[Square["B5"] = 62] = "B5";
    Square[Square["C5"] = 63] = "C5";
    Square[Square["D5"] = 64] = "D5";
    Square[Square["E5"] = 65] = "E5";
    Square[Square["F5"] = 66] = "F5";
    Square[Square["G5"] = 67] = "G5";
    Square[Square["H5"] = 68] = "H5";
    Square[Square["A6"] = 71] = "A6";
    Square[Square["B6"] = 72] = "B6";
    Square[Square["C6"] = 73] = "C6";
    Square[Square["D6"] = 74] = "D6";
    Square[Square["E6"] = 75] = "E6";
    Square[Square["F6"] = 76] = "F6";
    Square[Square["G6"] = 77] = "G6";
    Square[Square["H6"] = 78] = "H6";
    Square[Square["A7"] = 81] = "A7";
    Square[Square["B7"] = 82] = "B7";
    Square[Square["C7"] = 83] = "C7";
    Square[Square["D7"] = 84] = "D7";
    Square[Square["E7"] = 85] = "E7";
    Square[Square["F7"] = 86] = "F7";
    Square[Square["G7"] = 87] = "G7";
    Square[Square["H7"] = 88] = "H7";
    Square[Square["A8"] = 91] = "A8";
    Square[Square["B8"] = 92] = "B8";
    Square[Square["C8"] = 93] = "C8";
    Square[Square["D8"] = 94] = "D8";
    Square[Square["E8"] = 95] = "E8";
    Square[Square["F8"] = 96] = "F8";
    Square[Square["G8"] = 97] = "G8";
    Square[Square["H8"] = 98] = "H8";
    Square[Square["NO_SQ"] = 99] = "NO_SQ";
})(Square = exports.Square || (exports.Square = {}));
;
var MAX_MOVES = 2048;
exports.SQUARE_NUM = 120;
var Board = /** @class */ (function () {
    function Board() {
        this.pieces = [];
        this.pawns = [];
        this.kingSquare = [];
        this.pieceNum = [];
        this.bigPieces = [];
        this.majorPieces = [];
        this.minorPieces = [];
        this.sideToMove = Color.WHITE;
        this.enPas = Square.NO_SQ;
        this.fiftyMovesReached = false;
        this.ply = 0;
        this.historyPly = 0;
        this.positionKey = 0;
        this.castlePerm = 0;
        this.history = [];
        this.board120 = [];
        this.board64 = [];
    }
    Board.prototype.InitBoards = function () {
        var index = 0;
        var file = File.FILE_A;
        var rank = Rank.RANK_1;
        var square = Square.A1;
        var square64 = 0;
        for (index = 0; index < exports.SQUARE_NUM; ++index) {
            this.board120[index] = 65;
        }
        for (index = 0; index < 64; ++index) {
            this.board64[index] = 120;
        }
        for (rank = Rank.RANK_1; rank <= Rank.RANK_8; ++rank) {
            for (file = File.FILE_A; file <= File.FILE_H; ++file) {
                square = this.FileAndRankToSquare(file, rank);
                this.board120[square64] = square;
                this.board64[square] = square64;
                square64++;
            }
        }
    };
    Board.prototype.FileAndRankToSquare = function (f, r) {
        return (f + 21) + (r * 10);
    };
    return Board;
}());
exports.Board = Board;
