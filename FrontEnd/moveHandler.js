export default async function handlePlayerMove(id) {
  clearTiles();

  let button = document.getElementById(id);
  button.style.backgroundColor = "red";
}

function clearTiles() {
  let tiles = document.getElementsByClassName("grid-item");

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].style.backgroundColor = "white";
  }
}

async function GetBotMove() {
  let data = {
    firstName: "Joao",
    lastName: "Dos Santos",
  };

  const url = "https://localhost:7000/test";
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
      throw new Error(response.error);
    }
    return response.json();
  });

  return response;
}
