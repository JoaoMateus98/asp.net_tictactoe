import Board from "./Board.js";
import { baseURL } from "./main.js";
import getServerTiles from "./boardStateHandler.js";

let currentBoard;

export default async function handlePlayerMove(id) {
  if (!isValidMove(id)) return;

  appendX(id);

  currentBoard = createBoardInstance();

  await updateServerBoard(currentBoard);

  let botResponse = await getBotMove();
}

// check if the tile is empty
// if it is. return true
// else return false
function isValidMove(tileId) {
  let tileElement = document.getElementById(tileId);
  let isValid = tileElement.firstChild ? false : true;
  return isValid;
}

function appendX(id) {
  let tile = document.getElementById(id);
  let newChild = document.createElement("p");
  newChild.classList.add("filled-tile");
  newChild.textContent = "X";
  tile.appendChild(newChild);
}

// creates a new board based on the on in the UI and returns it
function createBoardInstance() {
  let clientBoard = new Board({}, true);
  let tiles = document.getElementsByClassName("grid-item");
  for (let i = 0; i < tiles.length; i++) {
    let currentTile = tiles[i];
    if (currentTile.firstChild) {
      let textContent = currentTile.firstChild.textContent;
      switch (textContent) {
        case "X":
          clientBoard.tiles[currentTile.id] = 1;
          break;
        case "O":
          clientBoard.tiles[currentTile.id] = 2;
          break;
        default:
          throw new Error("something went wrong");
      }
    }
  }

  return clientBoard;
}

async function updateServerBoard(board) {
  const url = `${baseURL}/boardState`;
  await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(board),
  }).then((response) => {
    if (!response.status === 201) {
      throw new Error(response.error);
    }
  });
}

async function getBotMove() {
  const url = `${baseURL}/aiMove`;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "text/html",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.error);
    }
    return response;
  });

  return response;
}
