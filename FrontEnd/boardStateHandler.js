import { baseURL } from "./main.js";

export default async function getBoardState() {
  let boardState = await fetchBoardState();

  console.log(boardState);
}

async function fetchBoardState() {
  const url = `${baseURL}/boardState`;
  const boardState = await fetch(url, {
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

  return boardState;
}
