document.querySelector("#start").addEventListener("click", init);
document.querySelector("#rock").addEventListener("click", () => { playRound("ROCK") });
document.querySelector("#paper").addEventListener("click", () => { playRound("PAPER") });
document.querySelector("#scissors").addEventListener("click", () => { playRound("SCISSORS") });
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

function computerChoice() {
    const rand = getRndInteger(0, 2);
    const options = ['ROCK', 'PAPER', 'SCISSORS']
    console.log("Computer choice: " + rand + " " + options[rand]);
    return [options[rand], rand.toString()];
}
function action(doWhat) {
    if(doWhat == "Start Game"){
        document.querySelectorAll("#player-score, #computer-score, #current-round").forEach(scoreHolder => scoreHolder.innerText = "0");
        document.querySelector("#log").innerHTML = "";
        document.querySelector("#start").style.display = "none";
        document.querySelectorAll(".element").forEach(element => element.style.display = "flex");
    } else if (doWhat == "End Game") {
        document.querySelector("#start").style.display = "flex";
        document.querySelectorAll(".element").forEach(element => element.style.display = "none");
    } 
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
    
    function turnDecision(a, b, c) {
        if (computerSelection[0] === a) {
            if (playerSelection ===b) {
                result = [1, `Player wins. ${playerSelection} beats ${computerSelection[0]}`];
            } else if (playerSelection === c) {
                result = [2, `Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
            }
        }
    }

    if (computerSelection[0] === playerSelection) {
        result = [0, `It's a tie. You both chose ${computerSelection[0]}`];
    }

    turnDecision("ROCK", "PAPER", "SCISSORS");
    turnDecision("PAPER", "SCISSORS", "ROCK");
    turnDecision("SCISSORS", "ROCK", "PAPER");

    switch (result[0]) {
        case 0:
            console.log(`Tie, No one gets a point. PLAYER: ${playerScore} | COMPUTER: ${computerScore} `);
            updateVisuals('none', 0, result[1]);
            break;
        case 1:
            playerScore++;
            updateVisuals('player', playerScore, result[1]);
            console.log(`Player gets a point. Total: ${playerScore}`);
            break;
        case 2:
            computerScore++;
            updateVisuals('computer', computerScore, result[1]);
            console.log(`Computer gets a point. Total: ${computerScore}`);
            break;
    }
    return result;
}

//TODO: -- DONE -- End Game restart bug fix 

function init() {
    action('Start Game');;
    //TODO: Gamemode with limited number of rounds (5)
    //action('End Game');
}


