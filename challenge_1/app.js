const app = () => {
  
  let turns = 'player x';

  let boardArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  let winnerExists = false; 

  const addXO = (event) => {
    if (event.target.innerHTML.length === 0) {
      if (turns === 'player x') {
        event.target.innerHTML = '<center>X</center>';
        boardArray[Math.floor(event.target.id/3)][event.target.id%3] = 'X';
        checkWins();
        } else {
        event.target.innerHTML = '<center>O</center>';
        boardArray[Math.floor(event.target.id/3)][event.target.id%3] = 'O';
        checkWins();
      }
      switchTurns();
    } 
  }

  const board = document.getElementById('board');
  board.onclick=addXO;

  const switchTurns = () => {
    if (turns === 'player x') {
      turns = 'player o';
    } else {
      turns = 'player x';
    }
  }

  const checkWins = () => {
    for (let row = 0; row < boardArray.length; row += 1) {
      checkRows(boardArray[row]);
    }
    checkColumns();
    checkDiagonals();

    let emptyBoard = true;

    for (let row = 0; row < boardArray.length; row += 1) {
      if (boardArray[row].includes(0)) {
        emptyBoard = false;
      }
    }

    if (emptyBoard && !winnerExists) {
      document.getElementById("message").innerHTML = `<h2>it's a tie!</h2>`;
    }

  }

  const checkRows = (row) => {
    for (let i = 0; i < row.length; i+=1) {
      let checkX = element => {
        return element === 'X';
      }
      let checkO = element => {
        return element === 'O';
      }
      if (row.every(checkX)) {
        win(turns);
        return;
      } else if (row.every(checkO)) {
        win(turns);
        return;
      }
    }
  }

  const checkColumns = () => {
    for (let i = 0; i < 3; i += 1) {
      if (boardArray[0][i] === 'X' && boardArray[1][i] === 'X' && boardArray[2][i] === 'X') {
        win(turns);
      } else if (boardArray[0][i] === 'O' && boardArray[1][i] === 'O' && boardArray[2][i] === 'O') {
        win(turns);
      }
    }
  }

  const checkDiagonals = () => {
    if ((boardArray[0][0] === 'X' && boardArray[1][1] === 'X' && boardArray[2][2] === 'X') || (boardArray[0][2] === 'X' && boardArray[1][1] === 'X' && boardArray[2][0] === 'X')) {
      win(turns);
    } else if ((boardArray[0][0] === 'O' && boardArray[1][1] === 'O' && boardArray[2][2] === 'O') || (boardArray[0][2] === 'O' && boardArray[1][1] === 'O' && boardArray[2][0] === 'O')) {
      win(turns);
    } 
  }

  const win = (player) => {
    winnerExists = true;
    document.getElementById("message").innerHTML = `<h2>🎉 ${player} wins! 🎉</h2>`;
    board.onclick = '';
  }
}

const cells = document.getElementsByTagName('td');
const handleClick = () => {
  for (let i = 0; i < cells.length; i+=1) {
    cells[i].innerHTML = '';
  }
  document.getElementById("message").innerHTML = '';
  boardArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  app();
}

document.addEventListener('DOMContentLoaded', app);