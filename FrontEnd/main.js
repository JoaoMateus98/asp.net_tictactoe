import handlePlayerMove from "./moveHandler.js";
import getBoardState from "./boardStateHandler.js";

(id) => handlePlayerMove(id);

() => getBoardState();

// Make the functions available globally
window.handlePlayerMove = handlePlayerMove;
window.getBoardState = getBoardState;
