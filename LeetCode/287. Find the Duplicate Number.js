// 04 22 2022
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = nums[0];
  let slow = nums[0];
  let pointer = nums[0];

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      while (true) {
        if (slow === pointer) {
          return pointer;
        }

        slow = nums[slow];
        pointer = nums[pointer];
      }
    }
  }
};
// Used:: Floyd's Cycle
// Time:: n
// Space:: 1

// 02112022
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = 0;
  let slow = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[[nums[fast]]];

    if (fast === slow) {
      let pointer = 0;

      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }

      return pointer;
    }
  }
};
// Optimize: Floyd's Algorithm. fast and slow pointer.
// t = n, s= 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // use that array only contain nums in the range of indices

  let fast = 0;
  let slow = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];

    if (fast === slow) {
      let pointer = 0;

      while (pointer !== slow) {
        pointer = nums[pointer];
        slow = nums[slow];
      }

      return pointer;
    }
  }
};
// t = n, s= 1
