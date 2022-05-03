// 05-03-2022
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const table = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill('')
  );

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + text1[i - 1];
      } else {
        let above = table[i][j - 1];
        let left = table[i - 1][j];
        table[i][j] = above.length > left.length ? above : left;
      }
    }
  }

  return table[table.length - 1][table[0].length - 1].length;
};
// DP - table/matrix. important to add empty row and column at beginning
// Time:: n^2 or a*b
// Space:: n^2 or a*b
