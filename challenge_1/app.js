const app = () => {
  let turns = 'playerX';
  const board = document.getElementById('board');
  const cells = board.getElementsByTagName('td');

  const addXO = (event) => {
    if (turns === 'playerX') {
      event.target.innerHTML = 'X';
    } else {
      event.target.innerHTML = 'O';
    }
    switchTurns();
  }

  const switchTurns = () => {
    if (turns === 'playerX') {
      turns = 'playerO';
    } else {
      turns = 'playerX';
    }
  }

  for (let i = 0; i < cells.length; i += 1) {
    cells[i].onclick = this.addXO;
  }

}

document.addEventListener('DOMContentLoaded', app);