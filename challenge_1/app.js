const app = () => {
  const board = document.getElementById('board');
  const cells = board.getElementsByTagName('td');
  for (let i = 0; i < cells.length; i += 1) {
    cells[i].onclick = () => {
      cells[i].innerHTML = 'x';
    }
  }
}

document.addEventListener('DOMContentLoaded', app);