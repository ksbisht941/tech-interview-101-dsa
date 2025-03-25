// DOM references
const board = document.getElementById("board");
const restartBtn = document.getElementById("restart-btn");
const status = document.getElementById("status");

let currentPlayer = "X"; // Start with Player X

// Create the Tic-Tac-Toe board dynamically
function createBoard() {
  board.innerHTML = ""; // Clear the board

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i; // Store cell index for DSA logic
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

// Handle cell click (your DSA logic will go here)
function handleCellClick(e) {
  const cell = e.target;

  // Placeholder for your game logic
  if (!cell.textContent) {
    cell.textContent = currentPlayer; // Place X or O
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle player
    status.textContent = `Player ${currentPlayer}'s turn`;
  }

  // TODO: Add DSA logic here to check for the winner
}

// Restart the game
function restartGame() {
  currentPlayer = "X";
  status.textContent = "Player X's turn";
  createBoard();
}

// Event listeners
restartBtn.addEventListener("click", restartGame);

// Initialize the board on load
createBoard();
