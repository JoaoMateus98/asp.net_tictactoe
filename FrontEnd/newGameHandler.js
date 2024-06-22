import { baseURL } from "./main.js";
import getServerTiles from "./boardStateHandler.js";

export default async function newGame() {
  let serverResponse = await clearServerBoard();

  await getServerTiles();
}

async function clearServerBoard() {
  const url = `${baseURL}/newGame`;
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
  });

  return response;
}
