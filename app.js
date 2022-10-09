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
        return "Draw";
    }

    if ((player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")){
        return "You Win! " + player[0].toUpperCase() + " beats " + computer[0].toUpperCase(); 
    } else {
        return "You Lose! " + computer[0].toUpperCase() + " beats " + player[0].toUpperCase();
    }
}