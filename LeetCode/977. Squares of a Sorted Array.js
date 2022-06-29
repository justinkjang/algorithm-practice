// 06 29 2022
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  // each number is squared
  // sort array increasing order
  // Time: n log n, Space: constant

  // more optimized way, we can use two pointer system
  // only possible because nums array is already sorted
  // create a copy of empty nums array
  // set idx variable and left and right var
  // compare squares of left and right, bigger number is places and that pointer is moved and decrease idx vairable.

  // Time: linear, Space: linear

  let result = new Array(nums.length).fill(0);
  let idx = nums.length - 1;
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal > rightVal) {
      result[idx] = leftVal;
      left++;
      idx--;
    } else {
      result[idx] = rightVal;
      right--;
      idx--;
    }
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let resultIdx = nums.length - 1;

  while (left <= right) {
    let leftVal = Math.pow(nums[left], 2);
    let rightVal = Math.pow(nums[right], 2);

    if (leftVal < rightVal) {
      result[resultIdx] = rightVal;
      right--;
    } else {
      result[resultIdx] = leftVal;
      left++;
    }

    resultIdx--;
  }

  return result;
};

// optimized way: using two pointer system. Because, nums is sorted already.
// t = n s = n
