const choices = ["rock", "paper", "scissor"];
const totalRounds = parseInt(prompt("How many rounds?"));

let humanScore = 0;
let computerScore = 0;

playGame(totalRounds);



function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; // I want a random number between 0 and 2
}

function getHumanChoice() {
    let answer = prompt("Fai la tua mossa!");
    return answer.toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice.length == computerChoice.length) console.log("It's a Draw!")
    else {
        switch (humanChoice) {
            case 'rock': computerChoice == 'paper' ? cpuWins() : playerWins(); break;
            case 'paper': computerChoice == 'scissor' ? cpuWins() : playerWins(); break;
            case 'scissor': computerChoice == 'rock' ? cpuWins() : playerWins(); break;
        }
    }
}

function playerWins() {
    console.log("You Win!");
    humanScore++;
}
function cpuWins() {
    console.log("CPU Win!");
    computerScore++;
}

function playGame(rounds) {

    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(humanScore);
    console.log(computerScore);
}