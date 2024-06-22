export default class Board {
  tiles = {
    tile1: 0,
    tile2: 0,
    tile3: 0,
    tile4: 0,
    tile5: 0,
    tile6: 0,
    tile7: 0,
    tile8: 0,
    tile9: 0,
  };
  constructor(serverTiles, isNewBoard = false) {
    if (isNewBoard) {
      Object.entries(this.tiles).forEach(([key, value]) => {
        this.tiles[key] = 0;
      });
    } else {
      Object.entries(this.tiles).forEach(([key, value]) => {
        this.tiles[key] = serverTiles[key];
      });
    }
  }
}
