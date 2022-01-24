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
