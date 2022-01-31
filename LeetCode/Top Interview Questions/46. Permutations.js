/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // global result
  let result = [];

  // dfs recursive helper
  let dfs = (i, nums) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    // recursive case
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];

      dfs(i + 1, nums);

      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

// T&S:: O(n! * n)
