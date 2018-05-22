const app = () => {
  let turns = 'player X';
  const board = document.getElementById('board');
  const cells = board.getElementsByTagName('td');

  const boardArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const addXO = (event) => {
    if (event.target.innerHTML.length === 0) {
      if (turns === 'player X') {
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

  const switchTurns = () => {
    if (turns === 'player X') {
      turns = 'player O';
    } else {
      turns = 'player X';
    }
  }

  const checkWins = () => {
    for (let i = 0; i < boardArray.length; i += 1) {
      checkRows(boardArray[i]);
      checkColumns(i);
    }
  }

  const checkRows = row => {
    for (let i = 0; i < row.length; i+=1) {
      let checkX = element => {
        return element === 'X';
      }
      let checkO = element => {
        return element === 'O';
      }
      if (row.every(checkX)) {
        onWin(turns);
        return;
      } else if (row.every(checkO)) {
        onWin(turns);
        return;
      }
    }
  }

  const checkColumns = row => {
    for (let i = 0; i < 3; i += 1) {
      if (boardArray[row][i] === 'X' && boardArray[row+1][i] === 'X' && boardArray[row+2][i] === 'X') {
        onWin(turns);
      } else if (boardArray[row][i] === 'O' && boardArray[row][i] === 'O' && boardArray[row+2][i] === 'O') {
        onWin(turns);
      }
    }
  }

  const onWin = (turns) => {
    alert(`${turns} wins!`);
    for (let j = 0; j < cells.length; j += 1) {
      cells[j].onclick = '';
    }
  }

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].onclick = addXO;
  }
}

document.addEventListener('DOMContentLoaded', app);