import handlePlayerMove from "./moveHandler.js";
import getBoardState from "./boardStateHandler.js";
export const baseURL = "https://localhost:7000";

(id) => handlePlayerMove(id);

() => getBoardState();

// Make the functions available globally
window.handlePlayerMove = handlePlayerMove;
window.getBoardState = getBoardState;
