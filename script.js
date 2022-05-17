rpsArray = ["rock", "paper", "scissor"];
let playerScore, computerScore;

// 1. Make computerPlay function to randomly select rock, paper, or scissor.
function randomNum(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}

function computerPlay() {
  const computerChoice = rpsArray[randomNum(rpsArray.length) - 1];
  return computerChoice;
}

// 2. Write a function playRound to play a game which takes 2 parameters, which are playerSelection and computerSelection.
// 3. The function playRound must return a string that declares the winner as such "You Lose! Paper beats Rock".
function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    console.log(`It's a draw! You both picked ${computerSelection}`);
  } else {
    if (computerSelection == "rock") {
      if (playerSelection == "paper") {
        console.log("You Win! Paper beats Rock");
        playerScore++;
      } else if (playerSelection == "scissor") {
        console.log("You Lose! Rock beats Scissor");
        computerScore++;
      }
    } else if (computerSelection == "paper") {
      if (playerSelection == "rock") {
        console.log("You Lose! Paper beats Rock");
        computerScore++;
      } else if (playerSelection == "scissor") {
        console.log("You Win! Scissor beats Paper");
        playerScore++;
      }
    } else {
      if (playerSelection == "rock") {
        console.log("You Win! Rock beats Scissor");
        playerScore++;
      } else if (playerSelection == "paper") {
        console.log("You Lose! Scissor beats Paper");
        computerScore++;
      }
    }
  }
}

// 4. Player input must be case-insenstive, accepting all kinds of lowercase, uppercase, and both.
// 5. Write a function called game and use for loops to play it 5 times.
function game() {
  playerScore = computerScore = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Rock, paper, scissor!").toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log(`You Won!`);
  } else if (playerScore < computerScore) {
    console.log("You Lose!");
  } else if (playerScore == computerScore) {
    console.log("It's a draw!");
  }
}
// 6. This function will keep score and display winner when the loop ends.

game();
