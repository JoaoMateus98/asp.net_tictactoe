import Board from "./Board.js";
import { baseURL } from "./main.js";

export default async function getServerBoard() {
  let serverBoard = await fetchServerBoard();

  let topRow = serverBoard.top;
  let middleRow = serverBoard.middle;
  let bottomRow = serverBoard.bottom;

  let clientBoard = new Board(topRow, middleRow, bottomRow);

  console.log(clientBoard);
}

async function fetchServerBoard() {
  const url = `${baseURL}/boardState`;
  let serverBoard = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.error);
    }
    return response.json();
  });

  return serverBoard;
}
