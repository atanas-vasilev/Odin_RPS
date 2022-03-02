document.querySelector("#start").addEventListener("click", init);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function computerChoice() {
    const rand = getRndInteger(1, 3);
    console.log("Computer choice: " + rand);
    switch (rand) {
        case 1:
            return ["ROCK", rand.toString()];
        case 2:
            return ["PAPER", rand.toString()];
        case 3:
            return ["SCISSORS", rand.toString()];
    }
}
function showPlayButtons() {
    // show rock paper scissor btns and hide start button
    resetGame();
    document.querySelector("#start").style.display = "none";
    document.querySelectorAll(".element").forEach(element => element.style.display = "flex");
}
function endGame() {
    // hide rock paper scissor btns, show restart button
    document.querySelector("#start").style.display = "flex";
    document.querySelectorAll(".element").forEach(element => element.style.display = "none");
}
function resetGame() {
    // hide rock paper scissor btnsl, reset points, show start button;
    document.querySelector("#player-score").innerText = "0";
    document.querySelector("#computer-score").innerText = "0";
    document.querySelector("#current-round").innerText = "0";
    document.querySelector("#log").innerHTML = "";
    document.querySelector("#start").style.display = "flex";
}
function updateVisuals(ofWho, newScore, logText) {
    //increment scrore visuals
    if (ofWho == 'player') {
        document.querySelector("#player-score").innerText = newScore;
    } else if (ofWho == 'computer') {
        document.querySelector("#computer-score").innerText = newScore;
    }
    //increment round visuals
    document.querySelector("#current-round").innerText = Number(document.querySelector("#current-round").innerText)+1 ;
    //log
    document.querySelector("#log").innerHTML = `<li>${logText}</li> ${document.querySelector("#log").innerHTML}`;
}

function playRound(playerSelection, computerSelection = computerChoice()) {

    let playerScore = Number(document.querySelector("#player-score").innerText);
    let computerScore = Number(document.querySelector("#computer-score").innerText);

    let result;
    //If both are the same, no one wins.
    if (computerSelection[0] === playerSelection) {
        result = [0, `It's a tie. You both chose ${computerSelection[0]}`];
    }

    //If comp = rock

    if (computerSelection[0] === "ROCK") {
        if (playerSelection === "PAPER") {
            result = [1, `Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "SCISSORS") {
            result = [2, `Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }

    if (computerSelection[0] === "PAPER") {
        if (playerSelection === "SCISSORS") {
            result = [1, `Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "ROCK") {
            result = [2, `Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }

    if (computerSelection[0] === "SCISSORS") {
        if (playerSelection === "ROCK") {
            result = [1, `Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "PAPER") {
            result = [2, `Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }


    switch (result[0]) {
        case 0:
            //tie, no one wins
            console.log(`Tie, No one gets a point. PLAYER: ${playerScore} | COMPUTER: ${computerScore} `);
            updateVisuals('none', 0, result[1]);
            break;
        case 1:
            //player wins
            playerScore++;
            updateVisuals('player', playerScore, result[1]);
            console.log(`Player gets a point. Total: ${playerScore}`);
            break;
        case 2:
            //computer wins
            computerScore++;
            updateVisuals('computer', computerScore, result[1]);
            console.log(`Computer gets a point. Total: ${computerScore}`);
            break;
    }

    return result;

}

function init() {
    showPlayButtons();

    document.querySelector("#rock").addEventListener("click", () => { playRound("ROCK") });
    document.querySelector("#paper").addEventListener("click", () => { playRound("PAPER") });
    document.querySelector("#scissors").addEventListener("click", () => { playRound("SCISSORS") });

    //TODO: Gamemode with limited number of rounds (5)
    // endGame();
}


