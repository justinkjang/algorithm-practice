// 06 27 2022
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // for log n complexity, we have to use binary search
  // set left and right pointer
  // while left < right, get mid number and compare it to mid + 1
  // if mid is smaller move left pointer to potential peak
  // if mid is bigger, move right pointer to potential peak

  // Time: log n / Space: 1

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

// binary search because question indicated using O(log n) and that every number next to each other are different.
// t = log n , s=1
