import { Grid } from "./grid.js";
import { Tile } from "./tile.js";
const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
setupInputOnce();


function setupInputOnce(){
    window.addEventListener("keydown", handleInput, {once: true });
}
function handleInput(event){
    switch (event.key) {
        case "ArrowUp":
            moveUp();
            break;
        case "ArrowDown":
            moveDown();
            break;
        case "ArrowLeft":
            moveLeft();
                break;
        case "ArrowRight":
            moveRight();
                    break;
    
        default:
           setupInputOnce();
            return;
    }
    setupInputOnce();

}

function moveUp(){
    slideTiles(grid.cellsGroupedByColumn);
}


