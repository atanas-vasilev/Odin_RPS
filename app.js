function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function computerPlay(){
    const rand = getRndInteger(1,3);
    console.log("Computer choice: " + rand);
    switch(rand){
        case 1: 
            return ["ROCK", rand.toString()];
        case 2:
            return ["PAPER", rand.toString()];
        case 3:
            return ["SCISSORS", rand.toString()];
        default:
            console.error("Computer couldn't decide.")
    }
}

function playerSelection(){
    //TO-DO: Error Handling
    return prompt("Choose - Rock / Paper / Scissors").toLocaleUpperCase;
}

function playRound(computerSelection, playerSelection){

    //If both are the same, no one wins.
    if (computerSelection[0] === playerSelection) {
        return [0, `It's a tie. You both chose ${computerSelection[0]}`];
    }

    //If comp = rock

    if (computerSelection[0] === "ROCK"){
        if (playerSelection === "PAPER"){
            return [1,`Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "SCISSORS"){
            return [2,`Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }

    if (computerSelection[0] === "PAPER"){
        if (playerSelection === "SCISSORS"){
            return [1,`Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "ROCK"){
            return [2,`Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }

    
    if (computerSelection[0] === "SCISSORS"){
        if (playerSelection === "ROCK"){
            return [1,`Player wins. ${playerSelection} beats ${computerSelection[0]}`];
        } else if (playerSelection === "PAPER"){
            return [2,`Computer wins. ${computerSelection[0]} beats ${playerSelection}`];
        }
    }
    
}    

function game(){

    let playerScore = 0;
    let computerScore = 0;

    while(computerScore < 5 && playerScore < 5){

        let result = playRound(computerPlay(), playerSelection())
        alert(result[1]);

        switch(result[0]){
            case 0:
                //tie, no one wins
            case 1: 
                //player wins
                playerScore++;
            case 2: 
                //computer wins
                computerScore++;

        }

    }

    alert(computerScore > playerScore ? "Computer Wins!!" : "Player Wins!!")

}