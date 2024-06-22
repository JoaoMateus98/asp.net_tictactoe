import handlePlayerMove from "./moveHandler.js";
import getBoardState from "./boardStateHandler.js";
import getServerTiles from "./boardStateHandler.js";

(id) => handlePlayerMove(id);

() => getBoardState();

// Make the functions available globally
window.handlePlayerMove = handlePlayerMove;
window.getBoardState = getBoardState;

export const baseURL = "https://localhost:7000";
getServerTiles();
