import Board from "./Board.js";
import { baseURL } from "./main.js";
import updateBoardUI from "./BoardUpdater.js";

export default async function getServerTiles() {
  let serverTiles = await fetchServerTiles();

  updateBoardUI(serverTiles);
}

async function fetchServerTiles() {
  const url = `${baseURL}/boardState`;
  let serverTiles = await fetch(url, {
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

  return serverTiles;
}
