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

// Validate pawn movement
function isPawnMoveValid(selectedPiece, targetSquare) {
  const fromRow = parseInt(selectedPiece.parentElement.dataset.row, 10);
  const fromCol = parseInt(selectedPiece.parentElement.dataset.col, 10);
  const toRow = parseInt(targetSquare.dataset.row, 10);
  const toCol = parseInt(targetSquare.dataset.col, 10);

  // Pawns can only move forward, backward, left, or right
  const isVerticalMove = fromCol === toCol && fromRow !== toRow; // Same column, different row
  const isHorizontalMove = fromRow === toRow && fromCol !== toCol; // Same row, different column
  
  return isVerticalMove || isHorizontalMove; // Can move either vertically or horizontally
}

// Prevent King and Queen from moving
function isPieceFixed(selectedPiece) {
  const pieceType = selectedPiece.dataset.type;
  return pieceType === 'king' || pieceType === 'queen';
}

// Validate move for all pieces
function isMoveValid(selectedPiece, targetSquare) {
  const pieceType = selectedPiece.dataset.type;
  
