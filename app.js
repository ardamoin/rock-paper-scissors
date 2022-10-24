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

        playerScore++;
        return "You Win the Round! " + player[0].toUpperCase() + player.slice(1) + " beats " + computer[0].toUpperCase() + computer.slice(1); 

    } else {

        computerScore++;
        return "You Lose the Round! " + computer[0].toUpperCase() + computer.slice(1) + " beats " + player[0].toUpperCase() + player.slice(1);
        
    }
}

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}


const screen  = document.querySelector('.bg-container');
const buttons = document.querySelectorAll('img');
const roundResult = document.querySelector('.round-result'); //creates new div node to display who won
const scoreBoard = document.querySelector('.score-board');
const winner = document.querySelector('.winner');
const playButton = document.querySelector('.play-button');
const resetButton = document.querySelector('.reset-button');




let playerScore = 0;
let computerScore = 0;



playButton.addEventListener('click', function() {
    buttons.forEach(button => button.style.visibility = 'visible');
    roundResult.style.visibility = 'visible';
    scoreBoard.style.visibility = 'visible';
    winner.style.visibility = 'visible';
})

resetButton.addEventListener('click', function() {
    resetScores();
    scoreBoard.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    roundResult.textContent = '';
})


buttons.forEach(button => button.addEventListener('click', function() {

    roundResult.textContent = playRound(this.className, getComputerChoice()); //updates text content of result
    scoreBoard.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    winner.textContent = '';
    console.log(playerScore);
    console.log(computerScore);

    if (playerScore === 5) {
        winner.textContent = 'PLAYER WINS THE GAME !!!';
        winner.style.color = 'rgb(121, 200, 3)';
        resetScores();
        
    } else if (computerScore === 5) {
        winner.textContent = 'COMPUTER WINS :(';
        winner.style.color = 'rgb(236, 5, 5)';
        resetScores();
    }
}));



screen.appendChild(roundResult);
screen.appendChild(scoreBoard);
screen.appendChild(winner);