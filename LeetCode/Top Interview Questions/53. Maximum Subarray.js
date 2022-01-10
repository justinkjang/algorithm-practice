/**
 * @param {number[]} nums
 * @return {number}
 */

// [-2,1,-3,4,-1,2,1,-5,4]

var maxSubArray = function (nums) {
  if (nums.length === '1') return nums[0];

  let maxNum = nums[0];
  let accumulatedNum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(accumulatedNum + nums[i], nums[i]);

    if (temp > maxNum) {
      maxNum = temp;
    }

    accumulatedNum = temp;
  }

  return maxNum;
};
