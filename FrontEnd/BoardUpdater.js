// change the board UI
export default function updateBoardUI(board) {
  let newChild;

  Object.entries(board.tiles).forEach(([key, value]) => {
    let tileElement = document.getElementById(key);
    if (tileElement.firstChild) {
      tileElement.removeChild(tileElement.firstChild);
    }
    switch (value) {
      case 0:
        break;
      case 1:
        newChild = document.createElement("p");
        newChild.classList.add("filled-tile");
        newChild.textContent = "X";
        tileElement.appendChild(newChild);
        break;
      case 2:
        newChild = document.createElement("p");
        newChild.classList.add("filled-tile");
        newChild.textContent = "O";
        tileElement.appendChild(newChild);
        break;
      default:
        throw new Error(
          `${value} is not a valid value. Check server save file`
        );
    }
  });
}
