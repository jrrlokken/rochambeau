const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const buttons = document.querySelectorAll(".button");
const results = document.getElementById("results");
const reset = document.getElementById("reset");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");

let computerScore = 0;
let playerScore = 0;
let rounds = 0;

function computerPlay() {
  const arr = ['rock', 'paper', 'scissors'];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(player, computer) {
  if (player === computer) {
    results.innerHTML = "It's a draw!";
    rounds--;
  } else if (player === 'scissors') {
    if (computer === 'paper') {
      playerScore ++;
      pScore.innerHTML = playerScore;
      results.innerHTML = `Computer loses, ${player} beats ${computer}`;
    } else {
      computerScore ++;
      cScore.innerHTML = computerScore;
      results.innerHTML = `Computer wins, ${computer} beats ${player}`;
    }
  } else if (player === 'rock') {
    if (computer === 'scissors') {
      playerScore ++;
      pScore.innerHTML = playerScore;
      results.innerHTML = `Computer loses, ${player} beats ${computer}`;
    } else {
      computerScore ++;
      cScore.innerHTML = computerScore;
      results.innerHTML = `Computer wins, ${computer} beats ${player}`;
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      playerScore ++;
      pScore.innerHTML = playerScore;
      results.innerHTML = `Computer loses, ${player} beats ${computer}`;
    } else {
      computerScore ++;
      cScore.innerHTML = computerScore;
      results.innerHTML = `Computer wins, ${computer} beats ${player}`;
    }
  }   
}

function newGame() {
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  pScore.innerHTML = playerScore = 0;
  cScore.innerHTML = computerScore = 0;
  rounds = 0;
}

function game() {
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      playerSelection = e.path[0].firstChild.textContent.toLowerCase();
      if (rounds < 5) {
        playRound(playerSelection, computerPlay());
        rounds++;
        console.log(rounds);
      } else {
        endGame();
      }
    });
  }); 
}

function endGame() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
  if (computerScore > playerScore) {
    results.innerHTML = "Computer Wins the Game!";
  } else if (playerScore > computerScore) {
    results.innerHTML = "Player Wins the Game!";
  } else {
    results.innerHTML = "No winner - it's a draw!";
  }
}

game();


