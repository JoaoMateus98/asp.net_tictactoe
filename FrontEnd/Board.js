export default class Board {
  tiles = {
    "tile-1": 0,
    "tile-2": 0,
    "tile-3": 0,
    "tile-4": 0,
    "tile-5": 0,
    "tile-6": 0,
    "tile-7": 0,
    "tile-8": 0,
    "tile-9": 0,
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
