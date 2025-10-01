let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");

const computerChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return choices[randIdx];
};

const drawGame = () => {
  msg.innerText = "It's a draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userchoice, compchoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!. your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    msg.innerText = `You lost. computer ${compchoice} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  let compChoice = computerChoice();

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userchoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

const resetGame = () => {
  resetBtn.addEventListener("click", () => {
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = "0";
    computerScorePara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
  });
};
resetGame();
