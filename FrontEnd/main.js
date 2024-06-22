import handlePlayerMove from "./moveHandler.js";
import getBoardState from "./boardStateHandler.js";
import Board from "./Board.js";
import updateBoardUI from "./BoardUpdater.js";

(id) => handlePlayerMove(id);

() => getBoardState();

// Make the functions available globally
window.handlePlayerMove = handlePlayerMove;
window.getBoardState = getBoardState;

export const baseURL = "https://localhost:7000";
export let clientBoard = new Board({}, true); // create new board on page load
updateBoardUI(clientBoard);
