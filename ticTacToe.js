var box = document.querySelectorAll(".cell");
var statusCurrent = document.querySelector("#statusCurrent");
var restBtn = document.querySelector("#rBtn");
var winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
var options = ["", "", "", "", "", "", "", "", ""];
var aPlayer = "X";
var working = false;

startGame();

function startGame(){
    box.forEach(cell => cell.addEventListener("click", cellClicked));
    restBtn.addEventListener("click", restartGame)}