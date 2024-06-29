const choices = ["rock", "paper", "scissors"];

//const totalRounds = parseInt(prompt("How many rounds?"));

let humanScore = 0;
let computerScore = 0;
let playerScoreTag = document.querySelector("#playerPoints");
let cpuScoreTag = document.querySelector("#cpuPoints");


//playGame(totalRounds);



function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]; // I want a random number between 0 and 2
}

/* function getHumanChoice(answer) {
    //let answer = prompt("Fai la tua mossa!");
    return answer.toLowerCase().trim();
}
 */

function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    console.log(computerChoice);

    if (humanChoice.length == computerChoice.length) console.log("It's a Draw!")
    else {
        switch (humanChoice) {
            case 'rock': computerChoice == 'paper' ? cpuWins() : playerWins(); break;
            case 'paper': computerChoice == 'scissors' ? cpuWins() : playerWins(); break;
            case 'scissors': computerChoice == 'rock' ? cpuWins() : playerWins(); break;
        }
    }
    if(humanScore == 5 || computerScore == 5) declareWinner();
}

function declareWinner(){
    humanScore > computerScore ? alert("You Win! \n Game will be restarted") : alert("Cpu Win! \n Game will be restarted");
    restart();
}

function restart(){
    document.querySelectorAll('span').forEach (span => {span.textContent = '0';});
    humanScore =0;
    computerScore =0;

}

function playerWins() {
    humanScore++;
    playerScoreTag.textContent = humanScore;
}
function cpuWins() {
    computerScore++;
    cpuScoreTag.textContent = computerScore;
} 

/* function playGame(rounds) {

    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        }
        //QUI VA PLAYROUND
        console.log(humanScore);
        console.log(computerScore);
        } */

let btnList = document.querySelectorAll("button");
btnList.forEach(btn => {btn.addEventListener("click", (e) => { playRound(e.target.id, getComputerChoice());})}); //Not much readable, but useful for learning
