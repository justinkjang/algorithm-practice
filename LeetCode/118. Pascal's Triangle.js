// 02172022
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows < 1) return [];
  if (numRows === 1) return [[1]];

  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let curRow = [];
    let prevRow = triangle[i - 1];

    curRow.push(1);

    //Pascal logic
    for (let j = 1; j < prevRow.length; j++) {
      curRow[j] = prevRow[j] + prevRow[j - 1];
    }

    curRow.push(1);

    triangle.push(curRow);
  }

  return triangle;
};

// T = n^2 S = n

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pascal = [];
  for (let i = 0; i < numRows; i++) {
    pascal[i] = [];

    pascal[i][0] = 1;

    for (let j = 1; j < i; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j];
    }

    pascal[i][i] = 1;
  }

  return pascal;
};
