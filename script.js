let playerChoice;
let computerChoice;
let winner;
let playerPoints = 0;
let computerPoints = 0;


// computer randomly chooses
const choiceArray = ['rock', 'paper', 'scissors'];
function computerChoiceFunction() {
  return choiceArray[Math.floor(Math.random() * 3)];
}


// turn buttons into choices for the player
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScissors = document.querySelector('.btn-scissors');

btnRock.addEventListener('click', function () {
  playerChoice = 'rock';
  computerChoice = computerChoiceFunction();

  gameWinner();
});

btnPaper.addEventListener('click', function () {
  playerChoice = 'paper';
  computerChoice = computerChoiceFunction();

  gameWinner();
})

btnScissors.addEventListener('click', function () {
  playerChoice = 'scissors';
  computerChoice = computerChoiceFunction();

  gameWinner();
});



// rock paper scissors while keeping track of points
function playRound() {
  console.log(`playerPoints: ${playerPoints}`);
  console.log(`computerPoints: ${computerPoints}`);

  if (playerChoice === 'rock') {
    if (computerChoice === 'paper') {
      computerPoints++;
    }
    if (computerChoice === 'scissors') {
      playerPoints++;
    }
  }
  if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      playerPoints++;
    }
    if (computerChoice === 'scissors') {
      computerPoints++;
    }
  }
  if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      computerPoints++;
    }
    if (computerChoice === 'paper') {
      playerPoints++;
    }
  }
  console.log(`playerChoice: ${playerChoice}`);
  console.log(`computerChoice: ${computerChoice}`);
  console.log(`playerPoints: ${playerPoints}`);
  console.log(`computerPoints: ${computerPoints}`);
}


// ends game after 5 points
// includes the display of scores and winners on browser
const winnerDisplay = document.querySelector('.winner-display');
function gameWinner(){
  if (playerPoints < 5 && computerPoints < 5){
    playRound();
    playersScore();
    computersScore();
    displayFunction();
  }
  if (playerPoints === 5){
    winnerDisplay.textContent = `you win!`;
  }
  if (computerPoints === 5){
    winnerDisplay.textContent = `you lose!`;
  }
}



// player score
const playerScore = document.querySelector('.score-player');
const pScoreDiv = document.createElement('span');
function playersScore() {
  pScoreDiv.textContent = `${playerPoints}`;
  playerScore.appendChild(pScoreDiv);
}

// computer score
const compScore = document.querySelector('.score-computer');
const cScoreDiv = document.createElement('span');
function computersScore() {
  cScoreDiv.textContent = `${computerPoints}`;
  compScore.appendChild(cScoreDiv);
}



// create and style display for current selection of player's and computer's move
const display = document.querySelector('.display');
const playerDisplay = document.createElement('div');
const computerDisplay = document.createElement('div');
playerDisplay.style.margin = "0 1.5rem";
playerDisplay.style.padding = "0 1.5rem";
computerDisplay.style.margin = "0 1.5rem";
computerDisplay.style.padding = "0 1.5rem";

// function to add display of current selection of player's and computer's move
function displayFunction(){
  playerDisplay.textContent = `${playerChoice}`;
  computerDisplay.textContent = `${computerChoice}`;
  display.appendChild(playerDisplay);
  display.appendChild(computerDisplay);
}





