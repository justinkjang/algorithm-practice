/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }

    nums.pop();
  }

  return nums.join('');

  //Time: n^2 Space: 1
  // Optimize Space by using pop instead of temp [];
};
