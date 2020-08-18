// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:

// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true
// Example 2:

// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

function isValidSudoku(board) {
  let row = {};
  let column = {};
  let square = {};
  let rowCheck = false;
  let columnCheck = false;
  let squareCheck = false;
  let squareValue;

  if (board.length !== 9) return false;

  for (let i = 0; i < 9; i++) {
    row = {};
    column = {};
    square = {};

    // row check
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];

      if (!row[value] && value !== '.') {
        row[value] = 1;
      } else if (value === '.') {
        null;
      } else {
        return false;
      }
    }

    // column check
    for (let k = 0; k < 9; k++) {
      let value = board[k][i];
      if (!column[value] && value !== '.') {
        column[value] = 1;
      } else if (value === '.') {
        null;
      } else {
        return false;
      }
    }

    // square check
    for (let l = 0; l < 3; l++) {
      for (let m = 0; m < 3; m++) {
        if (i < 3) {
          squareValue = board[3 * i + l][m];
        }

        if (i > 2 && i < 6) {
          squareValue = board[3 * (i - 3) + l][m + 3];
        }

        if (i > 5) {
          squareValue = board[3 * (i - 6) + l][m + 6];
        }

        if (!square[squareValue] && squareValue !== '.') {
          square[squareValue] = 1;
        } else if (squareValue === '.') {
          null;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}
