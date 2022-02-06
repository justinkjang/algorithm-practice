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
