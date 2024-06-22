import handlePlayerMove from "./moveHandler.js";
import getBoardState from "./boardStateHandler.js";
import getServerTiles from "./boardStateHandler.js";
import newGame from "./newGameHandler.js";

() => newGame();

(id) => handlePlayerMove(id);

() => getBoardState();

// Make the functions available globally
window.handlePlayerMove = handlePlayerMove;
window.getBoardState = getBoardState;
window.newGame = newGame;

export const baseURL = "https://localhost:7000";
getServerTiles();
