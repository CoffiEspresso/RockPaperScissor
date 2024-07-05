const choices = ["rock", "paper", "scissors"];
const images = [ "./images/bulbasaur.png", "./images/charmander.png", "./images/squirtle.png"];
//const totalRounds = parseInt(prompt("How many rounds?"));

let humanScore = 0;
let computerScore = 0;
let playerScoreTag = document.querySelector("#playerPoints");
let cpuScoreTag = document.querySelector("#cpuPoints");
const playerChoiceImg = document.querySelector("#playerChoiceImg");
const cpuChoiceImg = document.querySelector("#cpuChoiceImg");
const title = document.querySelector("h2");
const subtitle = document.querySelector("#subtitle");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
const restartButton = document.querySelector("#restart");

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
    playerChoiceImg.setAttribute("src",images[choices.indexOf(humanChoice)]);
    cpuChoiceImg.setAttribute("src",images[choices.indexOf(computerChoice)]);
    
    if (humanChoice.length == computerChoice.length) {
        title.textContent = "It's a draw!";
        subtitle.textContent = "It's not so effective";
    }
    else { 
        switch (humanChoice) {
            case 'rock':{
                computerChoice == 'paper' ? 
                cpuWins():playerWins();
                break;
            } 
                
            case 'paper': {
                computerChoice == 'scissors' ? 
                cpuWins():playerWins();                
                break;
            } 
            case 'scissors': {
                computerChoice == 'scissors' ?
                cpuWins():playerWins();
                break;      
            } 
        }
    }

    if(humanScore == 5 || computerScore == 5) declareWinner();
}

function declareWinner(){
    let winner;
    humanScore > computerScore ? winner = "You Win!" : winner = "Cpu Win!" ;
    document.querySelector("#modalHeader").textContent = winner;
    modal.style.display = "block";
}

restartButton.onclick = restart;

function restart(){
    modal.style.display = "none";
    humanScore =0;
    computerScore =0;
    playerScoreTag.textContent = `You: ${humanScore}`;
    cpuScoreTag.textContent = `CPU: ${computerScore}`;
    playerChoiceImg.setAttribute("src","./images/unown.png");
    cpuChoiceImg.setAttribute("src","./images/unown.png");
    title.textContent = "Make your choice!";
    subtitle.textContent = "The first who get 5 wins, win the game!";
    
}

function playerWins() {
    humanScore++;
    playerScoreTag.textContent = `You: ${humanScore}`;
    title.textContent = "You Won!";
    subtitle.textContent = "It's super effective!";

}
function cpuWins() {
    computerScore++;
    cpuScoreTag.textContent = `CPU: ${computerScore}`;
    title.textContent = "You Lost!";
    subtitle.textContent = "That hurt!";
} 

span.onclick = function() {
    restart();
  }
  
  // When the user clicks anywhere outside of the modal, close it
 /*  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }  */
/* function playGame(rounds) {

    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        }
        //QUI VA PLAYROUND
        console.log(humanScore);
        console.log(computerScore);
        } */

let btnList = document.querySelectorAll(".choiceButton");
btnList.forEach(btn => {btn.addEventListener("click", (e) => { playRound(e.target.id, getComputerChoice());})}); //Not much readable, but useful for learning
