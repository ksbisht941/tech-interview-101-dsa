// DOM references
const gridContainer = document.getElementById('grid-container');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

const ROWS = 20;
const COLS = 20;

let startNode = null;
let endNode = null;
let isDragging = false;    // Track drag status

// Create the grid
function createGrid() {
  gridContainer.innerHTML = '';  // Clear the grid

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.dataset.row = row;
      cell.dataset.col = col;

      // Left-click to place start, end, or wall
      cell.addEventListener('mousedown', (e) => handleMouseDown(e, cell));
      cell.addEventListener('mouseenter', (e) => handleMouseEnter(e, cell));
      cell.addEventListener('mouseup', handleMouseUp);

      gridContainer.appendChild(cell);
    }
  }
}

// Handle mouse down (start drag or place start/end nodes)
function handleMouseDown(e, cell) {
  if (e.button === 0) {  // Left-click only
    if (!startNode) {
      cell.classList.add('start');
      startNode = cell;
    } else if (!endNode) {
      cell.classList.add('end');
      endNode = cell;
    } else {
      // Begin dragging to create walls
      isDragging = true;
      cell.classList.add('wall');
    }
  }
}

// Handle mouse enter (drag to create walls)
function handleMouseEnter(e, cell) {
  if (isDragging && cell !== startNode && cell !== endNode) {
    cell.classList.add('wall');
  }
}

// Handle mouse up (stop dragging)
function handleMouseUp() {
  isDragging = false;
}

// Reset the grid
function resetGrid() {
  startNode = null;
  endNode = null;
  createGrid();
}

// Placeholder for pathfinding algorithm
function startPathfinding() {
  if (!startNode || !endNode) {
    alert('Select both start and end points!');
    return;
  }

  // TODO: Add your DSA pathfinding logic here
  alert('Start pathfinding algorithm here 🚀');
}

// Event listeners
startBtn.addEventListener('click', startPathfinding);
resetBtn.addEventListener('click', resetGrid);

// Initialize the grid on load
createGrid();
