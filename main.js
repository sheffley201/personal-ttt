//array for each grid item
const ticTacToeGrid = [
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
  { empty: true, value: "none" },
];

//pull all elements from html
const grid = document.querySelector(".TTT-grid");
const gridCells = Array.from(document.querySelectorAll(".spot"));
const info = document.querySelector(".info");
const xInfo = document.querySelector('.x-wins');
const oInfo = document.querySelector('.o-wins');
const drawInfo = document.querySelector('.draw');
let xWins = 0;
let oWins = 0;
let draws = 0;
xInfo.textContent = 'X wins: ' + xWins;
oInfo.textContent = 'O wins: ' + oWins;
drawInfo.textContent = draws + ' Draws';
const symbols = document.querySelectorAll("span");
const winLines = document.querySelectorAll('.win-line');
const resetButton = document.querySelector("#reset-button");
const modeSelect = document.querySelector('.mode-select');
const button1p = document.querySelector('#one-player');
const button2p = document.querySelector('#two-player');
const buttonCvC = document.querySelector('#cpu-vs-cpu');
const changeMode = document.querySelector('#change-mode');
let gameWon = false;
let onePlayer = false;
let twoPlayer = false;
let autoPlay = false;
let slowPlace;

//check if anyone has won the game
const checkWin = function () {
  //win conditions for X
  if (
    ticTacToeGrid[0].value == "x" &&
    ticTacToeGrid[1].value == "x" &&
    ticTacToeGrid[2].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[0].style.display = 'block';
  } else if (
    ticTacToeGrid[3].value == "x" &&
    ticTacToeGrid[4].value == "x" &&
    ticTacToeGrid[5].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[1].style.display = 'block';
  } else if (
    ticTacToeGrid[6].value == "x" &&
    ticTacToeGrid[7].value == "x" &&
    ticTacToeGrid[8].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[2].style.display = 'block';
  } else if (
    ticTacToeGrid[0].value == "x" &&
    ticTacToeGrid[3].value == "x" &&
    ticTacToeGrid[6].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[3].style.display = 'block';
  } else if (
    ticTacToeGrid[1].value == "x" &&
    ticTacToeGrid[4].value == "x" &&
    ticTacToeGrid[7].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[4].style.display = 'block';
  } else if (
    ticTacToeGrid[2].value == "x" &&
    ticTacToeGrid[5].value == "x" &&
    ticTacToeGrid[8].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[5].style.display = 'block';
  } else if (
    ticTacToeGrid[0].value == "x" &&
    ticTacToeGrid[4].value == "x" &&
    ticTacToeGrid[8].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[6].style.display = 'block';
  } else if (
    ticTacToeGrid[2].value == "x" &&
    ticTacToeGrid[4].value == "x" &&
    ticTacToeGrid[6].value == "x"
  ) {
    info.textContent = "X wins!";
    xWins++;
    gameWon = true;
    winLines[7].style.display = 'block';
  }

  //win conditions for O
  else if (
    ticTacToeGrid[0].value == "o" &&
    ticTacToeGrid[1].value == "o" &&
    ticTacToeGrid[2].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[0].style.display = 'block';
  } else if (
    ticTacToeGrid[3].value == "o" &&
    ticTacToeGrid[4].value == "o" &&
    ticTacToeGrid[5].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[1].style.display = 'block';
  } else if (
    ticTacToeGrid[6].value == "o" &&
    ticTacToeGrid[7].value == "o" &&
    ticTacToeGrid[8].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[2].style.display = 'block';
  } else if (
    ticTacToeGrid[0].value == "o" &&
    ticTacToeGrid[3].value == "o" &&
    ticTacToeGrid[6].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[3].style.display = 'block';
  } else if (
    ticTacToeGrid[1].value == "o" &&
    ticTacToeGrid[4].value == "o" &&
    ticTacToeGrid[7].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[4].style.display = 'block';
  } else if (
    ticTacToeGrid[2].value == "o" &&
    ticTacToeGrid[5].value == "o" &&
    ticTacToeGrid[8].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[5].style.display = 'block';
  } else if (
    ticTacToeGrid[0].value == "o" &&
    ticTacToeGrid[4].value == "o" &&
    ticTacToeGrid[8].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[6].style.display = 'block';
  } else if (
    ticTacToeGrid[2].value == "o" &&
    ticTacToeGrid[4].value == "o" &&
    ticTacToeGrid[6].value == "o"
  ) {
    info.textContent = "O wins!";
    oWins++;
    gameWon = true;
    winLines[7].style.display = 'block';
  }

  //if no winner, check for draw
  else {
    let emptySpaces = 0;
    for (let status in ticTacToeGrid) {
      if (ticTacToeGrid[status].empty == true) {
        emptySpaces++;
      }
    }
    if (emptySpaces == 0) {
      draws++;
      gameWon = true;
      info.textContent = "It's a draw!";
      winLines[6].style.display = 'block';
      winLines[7].style.display = 'block';
    }
  }

  if (gameWon) {
    xInfo.textContent = "X wins: " + xWins;
    oInfo.textContent = "O wins: " + oWins;
    drawInfo.textContent = draws + " Draws";
  }
};

//function to play the game, add x if cell is empty
const addX = function() {
  //add event listener for the whole grid, but check which box was clicked
  info.textContent = "It is X's turn";
  grid.addEventListener('click', placeX = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    let cellNumber = event.target.id;
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      const x = gridCells[cellNumber].querySelector('span');
      x.style.display = 'block';
      ticTacToeGrid[cellNumber].empty = false;
      ticTacToeGrid[cellNumber].value = 'x';
      grid.removeEventListener('click', placeX);
      checkWin();
      if (gameWon == false) {
        if (onePlayer) {
          aiPlayerRandom();
        } else if (twoPlayer) {
          addO();
        }
      }
      /*if (onePlayer) {
        if (gameWon == false) {
          aiPlayerRandom();
        }
      }
      else if (twoPlayer) {
        if (stopGame == false) {
          addO();
        }
      }*/
    }
  });
}

//function to play the game, add o if cell is empty
const addO = function() {
  //add event listener for the whole grid, but check which box was clicked
  info.textContent = "It is O's turn";
  grid.addEventListener('click', placeO = () => {
    let clickedCell = ticTacToeGrid[Number(event.target.id)];
    let cellNumber = event.target.id;
    console.log(clickedCell);
    if (clickedCell.empty == true) {
      const o = gridCells[cellNumber].querySelectorAll('span')[1];
      o.style.display = 'block';
      ticTacToeGrid[cellNumber].empty = false;
      ticTacToeGrid[cellNumber].value = 'o';
      grid.removeEventListener('click', placeO);
      checkWin();
      if (gameWon == false) {
        addX();
      }
    }
  });
}

const aiPlayerRandom = function () {
  info.textContent = "It is O's turn";
  slowPlace = setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10 - 1);
    if (randomNumber < 0) {
      randomNumber = 0;
    }
    if (randomNumber > 8) {
      randomNumber = 8;
    }
    while (ticTacToeGrid[randomNumber].empty == false) {
      randomNumber = Math.floor(Math.random() * 10 - 1);
      if (randomNumber < 0) {
        randomNumber = 0;
      }
      if (randomNumber > 8) {
        randomNumber = 8;
      }
    }
    const o = gridCells[randomNumber].querySelectorAll("span")[1];
    o.style.display = "block";
    ticTacToeGrid[randomNumber].empty = false;
    ticTacToeGrid[randomNumber].value = "o";
    checkWin();
    if (gameWon == false) {
      if (onePlayer) {
        addX();
      } else if (autoPlay) {
        aiPlayerRandom2();
      }
    }
    /*if (onePlayer) {
      if (gameWon == false) {
        addX();
      }
    }
    else if (autoPlay) {
      if (gameWon == false) {
        aiPlayerRandom2();
      }
    }*/
  }, 1000);
}

const aiPlayerRandom2 = function () {
  info.textContent = "It is X's turn";
  slowPlace = setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10 - 1);
    if (randomNumber < 0) {
      randomNumber = 0;
    }
    if (randomNumber > 8) {
      randomNumber = 8;
    }
    while (ticTacToeGrid[randomNumber].empty == false) {
      randomNumber = Math.floor(Math.random() * 10 - 1);
      if (randomNumber < 0) {
        randomNumber = 0;
      }
      if (randomNumber > 8) {
        randomNumber = 8;
      }
    }
    const x = gridCells[randomNumber].querySelector("span");
    x.style.display = "block";
    ticTacToeGrid[randomNumber].empty = false;
    ticTacToeGrid[randomNumber].value = "x";
    checkWin();
    if (gameWon == false) {
      aiPlayerRandom();
    }
  }, 1000);
}

const resetGame = function () {
  clearTimeout(slowPlace);
  gameWon = false;
  for (let cell in ticTacToeGrid) {
    ticTacToeGrid[cell].empty = true;
    ticTacToeGrid[cell].value = "none";
  }
  for (let symbol of symbols) {
    symbol.style.display = "none";
  }
  for (let line of winLines) {
    line.style.display = 'none';
  }
  let nextPlayer = Math.random();
  if (nextPlayer > 0.5) {
    if (onePlayer || autoPlay) {
      aiPlayerRandom();
    } else if (twoPlayer) {
      addX();
    }
  } else {
    if (autoPlay) {
      aiPlayerRandom2();
    } else if (onePlayer) {
      addX();
    } else if (twoPlayer) {
      addO();
    }
  }
};

const selectMode = function () {
  gameWon = false;
  button1p.style.display = 'none';
  button2p.style.display = 'none';
  buttonCvC.style.display = 'none';
  resetButton.style.display = 'inline';
  changeMode.style.display = 'inline';
  if (event.target.id == "one-player") {
    onePlayer = true;
    let nextPlayer = Math.random();
    if (nextPlayer > 0.5) {
      addX();
    } else {
      aiPlayerRandom();
    }
  } else if (event.target.id == "two-player") {
    twoPlayer = true;
    let nextPlayer = Math.random();
    if (nextPlayer > 0.5) {
      addX();
    } else {
      addO();
    }
  } else if (event.target.id == 'cpu-vs-cpu') {
    autoPlay = true;
    let nextPlayer = Math.random();
    if (nextPlayer > 0.5) {
      aiPlayerRandom();
    } else {
      aiPlayerRandom2();
    }
  } else if (event.target.id == 'change-mode') {
    info.textContent = "Select a Mode";
    onePlayer = false;
    twoPlayer = false;
    autoPlay = false;
    gameWon = true;
    xWins = 0;
    oWins = 0;
    draws = 0;
    xInfo.textContent = "X wins: " + xWins;
    oInfo.textContent = "O wins: " + oWins;
    drawInfo.textContent = draws + " Draws";
    resetGame();
    button1p.style.display = 'inline';
    button2p.style.display = 'inline';
    buttonCvC.style.display = 'inline';
    resetButton.style.display = 'none';
    changeMode.style.display = 'none';
  }
}

info.textContent = 'Select a Mode';

modeSelect.addEventListener('click', selectMode);

resetButton.addEventListener("click", resetGame);
