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
