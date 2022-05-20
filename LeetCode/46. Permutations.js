// 05 20 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    // base
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};
// Time: N! * N

// 05 19 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;

      dfs(i + 1, nums);

      nums[j] = nums[i];
      nums[i] = temp;
    }
  };

  dfs(0, nums, []);

  return result;
};

// N! * N recursion

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
