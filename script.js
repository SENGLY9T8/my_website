// Initialize board and pieces
const board = document.getElementById('game-board');
const pieces = {
  king: '♔',
  queen: '♕',
  pawn: '♙',
};

// Custom starting positions
const startingPositions = [
  [null, 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top'],
  ['queen', null, null, null, null, null, null, null],
  ['pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top', 'pawn-top'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom'],
  [null, null, null, null, null, null, null, 'king'],
  ['pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', 'pawn-bottom', null],
];

// Create the board
function createBoard() {
  board.innerHTML = '';
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement('div');
      square.classList.add('square');
      
      // Alternate colors for chessboard
      if ((row + col) % 2 === 1) {
        square.classList.add('dark');
      }

      square.dataset.row = row;
      square.dataset.col = col;
      const pieceType = startingPositions[row][col];
      if (pieceType) {
        const piece = document.createElement('div');
        piece.classList.add('piece');
        if (pieceType.includes('pawn')) {
          piece.textContent = pieces['pawn'];
          piece.classList.add(pieceType); // Add pawn-top or pawn-bottom class
        } else {
          piece.textContent = pieces[pieceType];
          piece.dataset.type = pieceType;
        }
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
