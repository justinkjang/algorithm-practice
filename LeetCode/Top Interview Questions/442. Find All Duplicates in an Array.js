//02232022
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) {
      result.push(Math.abs(nums[i]));
    }

    nums[idx] = nums[idx] * -1;
  }

  return result;
};
// [i, n] range = use index number // important! nums[-int] wont work!!
// t= n , s= n but close to 1
//02152022
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1;

    if (nums[idx] < 0) {
      result.push(Math.abs(nums[i]));
    } else {
      nums[idx] = -nums[idx];
    }
  }

  return result;
};

// Hint! range [1,n] = two pointer index, val.  use a method to index of val of current index.
// Time = n     S = n
