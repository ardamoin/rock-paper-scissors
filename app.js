function randomIndex() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[randomIndex()];
}

function playRound(playerSelection, computerSelection) {

    let player = playerSelection.toLowerCase();
    let computer =   computerSelection.toLowerCase();

    if (player === computer) {
        return "Both players chose " + player + ". Draw";
    }

    if ((player === "rock" && computer === "scissors") || 
    (player === "paper" && computer === "rock") || 
    (player === "scissors" && computer === "paper")) {

        return "You Win! " + player[0].toUpperCase() + player.slice(1) + " beats " + computer[0].toUpperCase() + computer.slice(1); 

    } else {

        return "You Lose! " + computer[0].toUpperCase() + computer.slice(1) + " beats " + player[0].toUpperCase() + player.slice(1);
        
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose rock, paper or scissors: ");
        let result = playRound(playerSelection, getComputerChoice());

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
        console.log("Player Score: " + playerScore + ", Computer Score: " + computerScore);
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You Won the Game")
    } else if (playerScore < computerScore) {
        console.log("YOU LOST THE GAME :(")
    } else {
        console.log("Draw");
    }
}