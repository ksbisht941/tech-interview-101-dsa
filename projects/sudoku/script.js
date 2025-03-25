// DOM references
const grid = document.getElementById("sudoku-grid");
const solveBtn = document.getElementById("solve-btn");
const resetBtn = document.getElementById("reset-btn");

// Generate the 9x9 Sudoku Grid
function createGrid() {
  for (let row = 0; row < 9; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < 9; col++) {
      const td = document.createElement("td");
      const input = document.createElement("input");

      input.type = "text";
      input.maxLength = 1;

      // Only allow digits 1-9
      input.addEventListener("input", (e) => {
        const value = e.target.value;
        if (!/^[1-9]?$/.test(value)) {
          e.target.value = "";
        }
      });

      td.appendChild(input);
      tr.appendChild(td);
    }

    grid.appendChild(tr);
  }
}

// Reset the grid
function resetGrid() {
  const inputs = document.querySelectorAll("#sudoku-grid input");
  inputs.forEach((input) => (input.value = ""));
}

// Solve the Sudoku (your DSA logic goes here)
function solveSudoku() {
  // TODO: Add your Sudoku solving algorithm here
  alert("Solve function called! Add your DSA logic here 🚀");
}

// Event listeners
solveBtn.addEventListener("click", solveSudoku);
resetBtn.addEventListener("click", resetGrid);

// Initialize the grid on load
createGrid();
