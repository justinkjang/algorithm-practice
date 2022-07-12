// 07 11 2022
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // slice from len-k, two arrays and concat

  // but for greater optimization in space complexity,
  // reverse arr, reverse 0 to k-1, k to len - 1
  // edge case if k is greater then len, k % len to reduce loops

  // time n, space 1

  k = k % nums.length;

  nums.reverse();

  revNum(nums, 0, k - 1);
  revNum(nums, k, nums.length - 1);

  return nums;
};

var revNum = (nums, s, e) => {
  while (s < e) {
    [nums[s], nums[e]] = [nums[e], nums[s]];
    s++;
    e--;
  }
};

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
