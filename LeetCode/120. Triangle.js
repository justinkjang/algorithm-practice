// 05-03-2022
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // Create copy of triangle table
  const result = [];
  for (let row of triangle) {
    result.push(new Array(row.length).fill(0));
  }

  // first element is fixed
  result[0] = triangle[0];

  // both end of a row are simple sums with before
  // middle number need to pickout min num between two above
  for (let row = 1; row < result.length; row++) {
    for (let col = 0; col < result[row].length; col++) {
      if (col === 0) {
        result[row][col] = result[row - 1][col] + triangle[row][col];
      } else if (col === result[row].length - 1) {
        result[row][col] = result[row - 1][col - 1] + triangle[row][col];
      } else {
        result[row][col] =
          Math.min(result[row - 1][col - 1], result[row - 1][col]) +
          triangle[row][col];
      }
    }
  }

  // get min num from last row array
  return Math.min(...result[result.length - 1]);
};
// Dynamic Programming, tabulation concept
// Time:: n^2
// Space:: n

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const result = [];

  //copying triangle structure
  for (let row of triangle) {
    result.push(new Array(row.length).fill(0));
  }
  result[0] = triangle[0];

  for (let row = 1; row < triangle.length; row++) {
    for (let col = 0; col < triangle[row].length; col++) {
      if (col === 0) {
        result[row][col] = result[row - 1][col] + triangle[row][col];
      } else if (col === result[row].length - 1) {
        result[row][col] =
          result[row - 1][result[row - 1].length - 1] + triangle[row][col];
      } else {
        result[row][col] =
          Math.min(result[row - 1][col - 1], result[row - 1][col]) +
          triangle[row][col];
      }
    }
  }

  return Math.min(...result[result.length - 1]);
};

//HINT! Dynamic Programming example. Using tabulation method.
//T = n^2, S = n
