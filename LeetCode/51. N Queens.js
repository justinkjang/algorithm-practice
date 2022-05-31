/**
 * @param {number} n
 * @return {string[][]}
 */
let format = (arr) => {
  const result = [];

  for (let col = 0; col < arr.length; col++) {
    let newRow = new Array(arr.length).fill('.');
    let queenPlace = arr[col];
    newRow[queenPlace] = 'Q';

    result.push(newRow.join(''));
  }

  return result;
};
var solveNQueens = function (n) {
  const result = [];

  const dfs = (row, n, slate) => {
    // backtrack
    let lastQ = row - 1;
    for (let prevQ = 0; prevQ < lastQ; prevQ++) {
      // ban same col Q
      if (slate[prevQ] === slate[lastQ]) return;
      // ban diag Q (if abs of row diff and col diff equals)
      let rowDiff = Math.abs(lastQ - prevQ);
      let colDiff = Math.abs(slate[lastQ] - slate[prevQ]);
      if (rowDiff === colDiff) return;
    }

    // base
    if (row === n) {
      result.push(slate.slice()); // [2, 4, 1, 3]
      return;
    }

    // dfs
    for (let col = 0; col < n; col++) {
      slate.push(col);
      dfs(row + 1, n, slate);
      slate.pop();
    }
  };

  dfs(0, n, []);

  return result.map((arr) => format(arr));
};
