var chance = "Player 1"
var player = chance + "'s chance"
var disabledBtn = 0

document.querySelector("#chance").textContent = player
function check() {
    var btn1 = document.querySelector("#btn1").textContent
    var btn2 = document.querySelector("#btn2").textContent
    var btn3 = document.querySelector("#btn3").textContent
    var btn4 = document.querySelector("#btn4").textContent
    var btn5 = document.querySelector("#btn5").textContent
    var btn6 = document.querySelector("#btn6").textContent
    var btn7 = document.querySelector("#btn7").textContent
    var btn8 = document.querySelector("#btn8").textContent
    var btn9 = document.querySelector("#btn9").textContent
    var result = document.querySelector("#resultText")
    var reset = document.querySelector("#reset-btn")
    
   /*
        document.querySelector('#btn1').addEventListener("click", function() {
        disableBtn("btn1");
        });
        document.querySelector('btn1').addEventListener('click', function() {
        disableBtn('btn1');
        });
        document.querySelector('btn2').addEventListener('click', function() {
        disableBtn('btn2');
        });
        document.querySelector('btn3').addEventListener('click', function() {
        disableBtn('btn3');
        });
        document.querySelector('btn4').addEventListener('click', function() {
        disableBtn('btn4');
        });
        document.querySelector('btn5').addEventListener('click', function() {
        disableBtn('btn5');
        });
        document.querySelector('btn6').addEventListener('click', function() {
        disableBtn('btn6');
        });
        document.querySelector('btn7').addEventListener('click', function() {
        disableBtn('btn7');
        });
        document.querySelector('btn8').addEventListener('click', function() {
        disableBtn('btn8');
        });
        document.querySelector('btn9').addEventListener('click', function() {
        disableBtn('btn9');
        });
        */
        

    if (btn1 === "x" && btn2 === "x" && btn3 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn4 === "x" && btn5 === "x" && btn6 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "x" && btn8 === "x" && btn9 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "x" && btn4 === "x" && btn7 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "x" && btn5 == "x" && btn8 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "x" && btn6 === "x" && btn9 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "x" && btn5 === "x" && btn9 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "x" && btn5 === "x" && btn7 === "x") {
        disable()
        result.textContent = "Player 1 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "o" && btn2 === "o" && btn3 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn4 === "o" && btn5 === "o" && btn6 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn7 === "o" && btn8 === "o" && btn9 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "o" && btn4 === "o" && btn7 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn2 === "o" && btn5 == "o" && btn8 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "o" && btn6 === "o" && btn9 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn1 === "o" && btn5 === "o" && btn9 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (btn3 === "o" && btn5 === "o" && btn7 === "o") {
        disable()
        result.textContent = "Player 2 won !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

    else if (disabledBtn === 9) {
        disable()
        result.textContent = "Match Draw !"
        result.style.visibility = "visible"
        reset.style.visibility = "visible"
    }

}

function disableBtn(id) {
    if (chance === "Player 1") {
        document.getElementById(id).disabled = true
        document.getElementById(id).textContent = "x"
        chance = "Player 2"
        player = chance + "'s chance"
        document.querySelector("#chance").textContent = player
        disabledBtn = disabledBtn + 1
        check()
    }
    else if (chance === "Player 2") {
        document.getElementById(id).disabled = true
        document.getElementById(id).textContent = "o"
        chance = "Player 1"
        player = chance + "'s chance"
        document.querySelector("#chance").textContent = player
        disabledBtn = disabledBtn + 1
        check()
    }
}

function disable() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = true
    }
    document.querySelector("#reset-btn").style.visibility = "visible"
    document.querySelector("#resultText").style.visibility = "visible"
}

function reset() {
    for (var i = 1; i < 10; i++) {
        var id = "btn" + i
        document.getElementById(id).disabled = false
        document.getElementById(id).textContent = ""
    }
    chance = "Player 1"
    player = chance + "'s chance"
    document.querySelector("#chance").textContent = player
    document.querySelector("#reset-btn").style.visibility = "hidden"
    document.querySelector("#resultText").style.visibility = "hidden"
    disabledBtn = 0
}