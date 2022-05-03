// 05-03-2022
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  // create pascal array
  const pascal = [[1]];

  // for number of rows, create array
  for (let i = 1; i < numRows; i++) {
    const row = [];
    let prevRow = pascal[i - 1];

    // 1 is fixed at start and end of each row
    row.push(1);

    // in each row, element is equal to prev row's idx-1 + idx
    for (let j = 1; j < prevRow.length; j++) {
      row[j] = prevRow[j - 1] + prevRow[j];
    }

    row.push(1);

    // push complete array into pascal
    pascal.push(row);
  }

  // return pascal
  return pascal;
};
// DP (dynamic Programming) - Tabulation pattern.
// Time:: n^2
// Space:: n

// 05-03-2022
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  //     create row (array) filled with 1
  const pascal = [];

  //     number of elements in each row = row index+1
  for (let row = 1; row < numRows + 1; row++) {
    pascal.push(new Array(row).fill(1));
  }

  //     for each row, element equals to prev row's i-1 and i.
  for (let row = 2; row < numRows; row++) {
    for (let i = 1; i < pascal[row].length - 1; i++) {
      pascal[row][i] = pascal[row - 1][i - 1] + pascal[row - 1][i];
    }
  }

  //     return result array.
  return pascal;
};
// DP (dynamic Programming) - Tabulation pattern.
// Time:: n^2
// Space:: n

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
