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
    restBtn.addEventListener("click", restartGame);
    statusCurrent.textContent = `${aPlayer}'s turn`;
    working = true;
}
function cellClicked(){
    var cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !working){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = aPlayer;
    cell.textContent = aPlayer;
}
function chPlayer(){
    aPlayer = (aPlayer == "X") ? "O" : "X";
    statusCurrent.textContent = `${aPlayer}'s turn`;
}
function checkWinner(){
    var roundWon = false;

    for(let i = 0; i < winCombo.length; i++){
        var condition = winCombo[i];
        var cellA = options[condition[0]];
        var cellB = options[condition[1]];
        var cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusCurrent.textContent = `${aPlayer} wins!`;
        working = false;
    }
    else if(!options.includes("")){
        statusCurrent.textContent = `Draw!`;
        working = false;
    }
    else{
        chPlayer();
    }
}

function restartGame(){
    aPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusCurrent.textContent = `${aPlayer}'s turn`;
    box.forEach(cell => cell.textContent = "");
    working = true;
}