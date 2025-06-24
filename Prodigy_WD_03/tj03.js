let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let xScore = document.querySelector('#x-score');
let oScore = document.querySelector('#o-score');
let finalWinnerText = document.querySelector('#final-winner');

let turnO = true; // Player O starts
let xWins = 0;
let oWins = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

boxes.forEach((box) => {
  box.addEventListener('click', function () {
    if (box.innerText !== "" || isGameOver()) return;

    if (turnO) {
      box.innerText = 'O';
      box.style.color = 'green';
      turnO = false;
    } else {
      box.innerText = 'X';
      box.style.color = 'black';
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

function isGameOver() {
  return xWins === 2 || oWins === 2;
}

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Round Winner: ${winner}`;
  msgContainer.classList.remove('hide');
  disableBoxes();

  if (winner === 'X') {
    xWins++;
    xScore.innerText = xWins;
  } else {
    oWins++;
    oScore.innerText = oWins;
  }

  if (xWins === 2 || oWins === 2) {
    const finalWinner = xWins === 2 ? 'X' : 'O';
    finalWinnerText.innerText = `🏆 Player ${finalWinner} wins the game!`;
    disableBoxes();
  }
};

const checkWinner = () => {
  let hasWin = false;
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (
      pos1Val !== "" &&
      pos2Val !== "" &&
      pos3Val !== "" &&
      pos1Val === pos2Val &&
      pos2Val === pos3Val
    ) {
      showWinner(pos1Val);
      hasWin = true;
      return;
    }
  }

  if (!hasWin) {
    const allBoxesFilled = [...boxes].every((box) => box.innerText !== "");
    if (allBoxesFilled) {
      msgContainer.classList.remove('hide');
      msg.innerText = 'Match Drawn';
    }
  }
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add('hide');
  msg.innerText = '';
};

const newFullGame = () => {
  xWins = 0;
  oWins = 0;
  xScore.innerText = '0';
  oScore.innerText = '0';
  finalWinnerText.innerText = '';
  resetGame();
};

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', newFullGame);
