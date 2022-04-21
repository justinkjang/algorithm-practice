// 02102022
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let gSum = (nums.length * (nums.length + 1)) / 2;
  let nSum = nums.reduce((acc, el) => acc + el, 0);

  return gSum - nSum;
};

// optimize:: use sum of all algorithm.
// t = n, s = 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
};

// Andy Gala using total sum of array
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;

  let totalSum = (n * (n + 1)) / 2;

  let arrSum = nums.reduce((acc, i) => acc + i);

  return totalSum - arrSum;
};
