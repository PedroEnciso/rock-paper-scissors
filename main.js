const choices = ["rock", "paper", "scissors"];
const playerSelection = "scissors";

const computerPlay = () => {
  let randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "scissors":
      if (computerSelection === "rock") return "YOU LOSE. ROCK BEATS SCISSORS";
      if (computerSelection === "scissors")
        return "TIE. YOU BOTH CHOSE SCISSORS";
      if (computerSelection === "paper")
        return "YOU WIN! SCISSORS BEATS PAPER.";
      break;
  }
};

const computerSelection = computerPlay();

const result = playRound(playerSelection, computerSelection);

console.log(`The computer chose ${computerSelection}. ${result}`);
