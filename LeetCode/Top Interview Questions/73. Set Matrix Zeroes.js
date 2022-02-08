/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

let toZeroes = (r, c, matrix) => {
  for (let row = 0; row < matrix.length; row++) {
    // changing cols to 0
    matrix[row][c] = 0;
  }
  for (let col = 0; col < matrix[0].length; col++) {
    matrix[r][col] = 0;
  }
};
var setZeroes = function (matrix) {
  let zeroesA = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        zeroesA.push([r, c]);
      }
    }
  }

  for (let location of zeroesA) {
    let row = location[0];
    let col = location[1];

    toZeroes(row, col, matrix);
  }
};

// t = n^2  s = n
