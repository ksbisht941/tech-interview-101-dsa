// DOM references
const boardContainer = document.getElementById('board-container');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const boardSizeInput = document.getElementById('board-size');

let boardSize = 8;  // Default size

// Create the N-Queens board dynamically
function createBoard(size) {
  boardContainer.innerHTML = '';  // Clear the board
  boardContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      // Alternate light and dark cells
      if ((row + col) % 2 === 0) {
        cell.classList.add('light');
      } else {
        cell.classList.add('dark');
      }

      cell.dataset.row = row;
      cell.dataset.col = col;

      boardContainer.appendChild(cell);
    }
  }
}

// Start visualization (DSA logic goes here)
function startVisualization() {
  boardSize = parseInt(boardSizeInput.value);

  if (boardSize < 4 || boardSize > 12) {
    alert('Please select a board size between 4 and 12');
    return;
  }

  createBoard(boardSize);

  // TODO: Add your N-Queens solving DSA logic here 🚀
  alert(`Start visualizing ${boardSize}-Queens!`);
}

// Reset the board
function resetBoard() {
  boardContainer.innerHTML = '';
}

// Event listeners
startBtn.addEventListener('click', startVisualization);
resetBtn.addEventListener('click', resetBoard);

// Initialize the board on load
createBoard(boardSize);
