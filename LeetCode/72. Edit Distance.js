// 2022 05 07
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // create table
  let table = [];
  for (let row of word2 + 1) {
    table.push(new Array(word1.length + 1).fill(0));
  }
  for (let i = 0; i < table.length; i++) {
    table[i][0] = i;
  }
  for (let j = 0; j < table[0].length; j++) {
    table[0][j] = j;
  }

  // fill table with right number
  for (let row = 1; row < table.length; row++) {
    for (let col = 1; col < table[0].length; col++) {
      if (word2[row - 1] === word1[col - 1]) {
        table[row][col] = table[row - 1][col - 1];
      } else {
        table[row][col] =
          Math.min(
            table[row - 1][col],
            table[row][col - 1],
            table[row - 1][col - 1]
          ) + 1;
      }
    }
  }

  return table[table.length - 1][table[0].length - 1];
};
