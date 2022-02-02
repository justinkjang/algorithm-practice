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
