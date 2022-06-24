// 06 24 2022
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // TABULATION Pattern
  // create a copy of triangle
  // add the sum of prev row
  // get Min value of leaf level
  //Time = n, space = n

  //create table container
  const result = [];

  // create empty copy of triangle
  for (let row of triangle) {
    result.push(new Array(row.length).fill(0));
  }

  // set first num
  result[0] = triangle[0];

  for (let row = 1; row < triangle.length; row++) {
    for (let col = 0; col < triangle[row].length; col++) {
      //if the case is at the edge
      if (col === 0) {
        result[row][col] = result[row - 1][col] + triangle[row][col];
      } else if (col === triangle[row].length - 1) {
        result[row][col] = result[row - 1][col - 1] + triangle[row][col];
      } else {
        // if the case requires min value comparison
        result[row][col] =
          Math.min(result[row - 1][col], result[row - 1][col - 1]) +
          triangle[row][col];
      }
    }
  }

  return Math.min(...result[result.length - 1]);
};

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
// Time:: n^2 ?? isn't it a linear scan?
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
