/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const result = [];

  const dfs = (row, n, slate) => {
    // backtrack
    let lastQ = row - 1;
    for (let prevQ = 0; prevQ < lastQ; prevQ++) {
      if (slate[prevQ] === slate[lastQ]) return;

      let rowDiff = Math.abs(prevQ - lastQ);
      let colDiff = Math.abs(slate[prevQ] - slate[lastQ]);
      if (rowDiff === colDiff) return;
    }

    //base
    if (row === n) {
      result.push(slate.slice());
      return;
    }
    //dfs
    for (let col = 0; col < n; col++) {
      slate.push(col);
      dfs(row + 1, n, slate);
      slate.pop();
    }
  };

  dfs(0, n, []);

  return result.length;
};
