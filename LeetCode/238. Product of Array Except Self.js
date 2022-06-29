// 06 28 2022
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // dynamic programming
  // create arrays, left shifted and right shifted
  // for [1,2,3,4]
  // left: [1, 1, 2, 6]
  // righ: [24, 12, 4, 1]

  // Time: linear

  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let left = new Array(nums.length).fill(0);
  let right = new Array(nums.length).fill(0);

  left[0] = 1;
  right[right.length - 1] = 1;

  for (let i = 1; i < left.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  for (let i = right.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};

//t= n/ s=n
// special optimized way == creating left and right array
