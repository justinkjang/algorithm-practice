// 07 23 2022
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // !important: if current num is greater than prev accumulated nums, slide window.
  // if prev num is greater negative value, we are discarding contiguous process.
  // Time = n

  let globalMax = nums[0];
  let sofar = nums[0]; // is curr bigger then accumulated nums ? reset : continue accumulate.
  // in other words, is there huge negative value that we better disregard?

  for (let i = 1; i < nums.length; i++) {
    sofar = Math.max(sofar + nums[i], nums[i]);

    globalMax = Math.max(globalMax, sofar);
  }

  return globalMax;
};

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
