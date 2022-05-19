// 05 19 2022
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];

  // k = depth

  const nums = []; // [1, 2, 3, 4, ... 9]
  for (let i = 1; i < 10; i++) {
    nums.push(i);
  }

  const dfs = (i, k, n, nums, slate) => {
    // backtrack: stop if more than n
    if (n < 0) return;
    // base: stop when reached k
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
      return;
    }
    // dfs
    for (let j = i; j < nums.length; j++) {
      slate.push(nums[j]);
      dfs(j + 1, k, n - nums[j], nums, slate);
      slate.pop();
    }
  };

  dfs(0, k, n, nums, []);

  return result;
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  // global result
  let result = [];

  // create nums array
  let nums = [];
  for (let i = 1; i <= 9; i++) nums.push(i);

  // dfs recursive helper
  let dfs = (i, nums, k, n, slate) => {
    // backtracking case
    if (n < 0) return;

    // base case
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
      return;
    }

    // recursive case
    for (let j = i; j < nums.length; j++) {
      slate.push(nums[j]);
      dfs(j + 1, nums, k, n - nums[j], slate);
      slate.pop();
    }
  };

  dfs(0, nums, k, n, []);

  return result;
};

//T&S:: super complicated. show and explain the tree.
