// Initialize board and pieces
const board = document.getElementById('game-board');
const pieces = {
  king: '♔',
  rook: '♖',
  knight: '♘',
  bishop: '♗',
  pawn: '♙',
  queen: '♕'
};

// Define the cross-shaped starting positions
const startingPositions = [
  [null, null, 'king', null, null],
  [null, null, 'pawn', null, null],
  ['rook', 'pawn', 'queen', 'pawn', 'rook'],
  [null, null, 'pawn', null, null],
  [null, null, 'king', null, null]
];

// Create the board
function createBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (startingPositions[row][col]) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieces[startingPositions[row][col]];
        piece.dataset.type = startingPositions[row][col];
        square.appendChild(piece);
      }

      // Hide squares to make a cross shape
      if (
        (row === 0 && col !== 2) ||
        (row === 1 && col !== 2) ||
        (row === 3 && col !== 2) ||
        (row === 4 && col !== 2) ||
        (col === 0 && row !== 2) ||
        (col === 4 && row !== 2)
      ) {
        square.classList.add('hidden');
      }

      // Alternate square colors
      if ((row + col) % 2 === 0 && !square.classList.contains('hidden')) {
        square.classList.add('light');
      }

      board.appendChild(square);
    }
  }
}

// Handle piece movement
let selectedPiece = null;
board.addEventListener('click', (e) => {
  const target = e.target;
  const square = target.classList.contains('square') ? target : target.parentElement;

  if (target.classList.contains('piece')) {
    if (selectedPiece) {
      selectedPiece.classList.remove('selected');
    }
    selectedPiece = target;
    selectedPiece.classList.add('selected');
  } else if (selectedPiece && !square.classList.contains('hidden')) {
    square.appendChild(selectedPiece);
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
  }
});

createBoard();
