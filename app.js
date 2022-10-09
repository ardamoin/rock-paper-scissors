function randomIndex() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[randomIndex()];
}