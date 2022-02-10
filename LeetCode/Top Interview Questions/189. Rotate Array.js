/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

let revNums = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

var rotate = function (nums, k) {
  // in case k > nums.length, reduce repetitive loops
  k = k % nums.length;

  nums.reverse();

  revNums(nums, 0, k - 1);
  revNums(nums, k, nums.length - 1);
};

//t = n, s = 1
