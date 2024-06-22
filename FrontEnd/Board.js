export default class Board {
  board = { topRow: [], middleRow: [], bottomRow: [] };

  // create from saved board
  constructor(topRow, middleRow, bottomRow, isNewBoard = false) {
    if (isNewBoard) {
      this.board = {
        topRow: [0, 0, 0],
        middleRow: [0, 0, 0],
        bottomRow: [0, 0, 0],
      };
    } else {
      this.board = {
        topRow: topRow,
        middleRow: middleRow,
        bottomRow: bottomRow,
      };
    }
  }
}
