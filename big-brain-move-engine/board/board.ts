import { History } from "../history/history";

export enum Piece {EMPTY, wP, wN, wB, wR, wQ, wK, bP, bN, bB, bR, bQ, bK};
export enum File {FILE_NONE, FILE_A, FILE_B, FILE_C, FILE_D, FILE_E, FILE_F, FILE_G, FILE_H};
export enum Rank {RANK_NONE, RANK_1, RANK_2, RANK_3, RANK_4, RANK_5, RANK_6, RANK_7, RANK_8};
export enum Color {WHITE, BLACK, BOTH};
export enum Castle {WKCA = 1, WQCA = 2, BKCA = 4, BQCA = 8};

export enum Square {
  A1 = 21, B1, C1, D1, E1, F1, G1, H1,
  A2 = 31, B2, C2, D2, E2, F2, G2, H2,
  A3 = 41, B3, C3, D3, E3, F3, G3, H3,
  A4 = 51, B4, C4, D4, E4, F4, G4, H4,
  A5 = 61, B5, C5, D5, E5, F5, G5, H5,
  A6 = 71, B6, C6, D6, E6, F6, G6, H6,
  A7 = 81, B7, C7, D7, E7, F7, G7, H7,
  A8 = 91, B8, C8, D8, E8, F8, G8, H8, NO_SQ
};

const MAX_MOVES = 2048;
export const SQUARE_NUM = 120;

export class Board {
  private pieces: number[] = [];
  private pawns: number[] = [];
  private kingSquare: number[] = [];
  private pieceNum: number[] = [];
  private bigPieces: number[] = [];
  private majorPieces: number[] = [];
  private minorPieces: number[] = [];

  private sideToMove: Color = Color.WHITE;
  private enPas: Square = Square.NO_SQ;

  private fiftyMovesReached: boolean = false;

  private ply: number = 0;
  private historyPly: number = 0;
  private positionKey: number = 0;
  private castlePerm: number = 0;

  private history: History[] = [];

  private board120: number[] = [];
  private board64: number[] = [];

  constructor() {}

  InitBoards() {
    let index: number = 0;
    let file: File = File.FILE_A;
    let rank: Rank = Rank.RANK_1;
    let square: Square = Square.A1;
    let square64: number = 0;
  
    for (index = 0; index < SQUARE_NUM; ++index) {
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
  }

  private FileAndRankToSquare(f: File, r: Rank): Square {
    return (f + 21) + (r * 10);
  }
}