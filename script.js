rpsArray = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

function randomNum(maxNum) {
  return Math.floor(Math.random() * maxNum) + 1;
}

function computerPlay() {
  const computerChoice = rpsArray[randomNum(rpsArray.length) - 1];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerScore >= 5 || computerScore >= 5) {
    textDiv.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
  } else {
    if (computerSelection == playerSelection) {
      textDiv.textContent = `It's a draw! You both picked ${computerSelection}`;
    } else {
      if (computerSelection == "rock") {
        if (playerSelection == "paper") {
          textDiv.textContent = `You Win! Paper beats Rock`;
          playerScore++;
        } else if (playerSelection == "scissor") {
          textDiv.textContent = `You Lose! Rock beats Scissor`;
          computerScore++;
        }
      } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
          textDiv.textContent = "You Lose! Paper beats Rock";
          computerScore++;
        } else if (playerSelection == "scissor") {
          textDiv.textContent = "You Win! Scissor beats Paper";
          playerScore++;
        }
      } else {
        if (playerSelection == "rock") {
          textDiv.textContent = "You Win! Rock beats Scissor";
          playerScore++;
        } else if (playerSelection == "paper") {
          textDiv.textContent = "You Lose! Scissor beats Paper";
          computerScore++;
        }
      }
    }
  }
}

// function game() {
//   playerScore = computerScore = 0;
//   for (let i = 1; i <= 5; i++) {
//     let playerSelection = prompt("Rock, paper, scissor!").toLowerCase();
//     let computerSelection = computerPlay();
//     playRound(playerSelection, computerSelection);
//   }
//   if (playerScore > computerScore) {
//     console.log(`You Won!`);
//   } else if (playerScore < computerScore) {
//     console.log("You Lose!");
//   } else if (playerScore == computerScore) {
//     console.log("It's a draw!");
//   }
// }

const rock = document.createElement("button");
rock.textContent = "ROCK";
document.body.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "PAPER";
document.body.appendChild(paper);

const scissor = document.createElement("button");
scissor.textContent = "SCISSOR";
document.body.appendChild(scissor);

const textDiv = document.createElement("div");
textDiv.textContent = "";
document.body.appendChild(textDiv);

rock.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

paper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

scissor.addEventListener("click", () => {
  playRound("scissor", computerPlay());
});
