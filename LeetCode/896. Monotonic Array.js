/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let same = nums[0] === nums[nums.length - 1];
  let increase = nums[0] < nums[nums.length - 1];
  let decrease = nums[0] > nums[nums.length - 1];

  // i starts from 1 because of the last index case
  if (same) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) return false;
    }
    return true;
  } else if (increase) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) return false;
    }
    return true;
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) return false;
    }
    return true;
  }
};
//t = n s=1
