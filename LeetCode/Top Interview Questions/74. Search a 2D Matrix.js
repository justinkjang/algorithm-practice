/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);

    let midVal = matrix[Math.floor(mid / col)][mid % col];

    if (midVal === target) return true;
    if (target < midVal) right = mid - 1;
    else {
      left = mid + 1;
    }
  }

  return false;
};

//HINT! When array is sorted -> always think of binary search
// T = n    S = 1
