// Challenge 3 Rock, Paper, or Scissors---------->

// 1- getUserChoice :
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else if (userInput === "bomb") {
    return "You Won !";
  } else {
    console.log("Invalid choice !");
  }
};
// console.log(getUserChoice("bomb"));

// 2- getComputerChoice :
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};
// console.log(getComputerChoice());

// 3- determineWinner :
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "You Win";
  } else if (userChoice === computerChoice) {
    return "The game is a tie.";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  } else {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

// console.log(determineWinner("paper", "rock"));

// 4- playGame :
const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();
