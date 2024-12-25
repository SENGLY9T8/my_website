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

const startingPositions = [
  ['rook', null, null, null, 'king', null, null, 'rook'],
  ['pawn', 'pawn', 'pawn', 'pawn', null, 'pawn', 'pawn', 'pawn'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['pawn', 'pawn', 'pawn', 'pawn', null, 'pawn', 'pawn', 'pawn'],
  ['rook', null, null, null, 'king', null, null, 'rook']
];

// Create the board
function createBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.dataset.row = row;
      square.dataset.col = col;
      if (startingPositions[row][col]) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        piece.textContent = pieces[startingPositions[row][col]];
        piece.dataset.type = startingPositions[row][col];
        square.appendChild(piece);
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
  } else if (selectedPiece) {
    square.appendChild(selectedPiece);
    selectedPiece.classList.remove('selected');
    selectedPiece = null;
  }
});

createBoard();
