function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = Math.round((Math.random() * 10) / 3);
    // console.log(compChoice);
    if (1 > computerChoice) {
        computerChoice = "rock";
    } else if (2 > computerChoice >= 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    // console.log(compChoice);
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("Please select your choice: rock, paper, scissors").toLowerCase();
    console.log("You chose: " + playerChoice);
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock"){
            console.log("You both chose rock - it's a tie.");
        } else if (computerChoice === "paper") {
            console.log("The computer chose paper - you lose.");
            computerScore += 1;
        } else {
            console.log("The computer chose scissors - you win!");
            humanScore += 1;
        }
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if (humanChoice === "paper") {
        if (computerChoice === "paper"){
            console.log("You both chose paper - it's a tie.");
        } else if (computerChoice === "scissors") {
            console.log("The computer chose scissors - you lose.");
            computerScore += 1;
        } else {
            console.log("The computer chose rock - you win!");
            humanScore += 1;
        }
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    } else if (humanChoice === "scissors") {
        if (computerChoice === "scissors"){
            console.log("You both chose scissors - it's a tie.");
        } else if (computerChoice === "rock") {
            console.log("The computer chose rock - you lose.");
            computerScore += 1;
        } else {
            console.log("The computer chose paper - you win!");
            humanScore += 1;
        }
        console.log(`Your score: ${humanScore}\nComputer score: ${computerScore}`);
    }

}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    let round = 0;
    while (round <= 5) {
        humanChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        round += 1;
    }
    console.log(`Game Over!\nFinal scores are:\nPlayer:${humanScore} Computer:${computerScore}`);
}

playGame();