/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  //global result
  let result = [];

  // dfs helper function
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice()); // push a copy of slate so we can reuse state array
      return;
    }

    // dfs  recursive case

    // exclude current case
    dfs(i + 1, nums, slate);
    // include current case
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  return result;
};

//T:: O(2^n (recursive) *n (making copy of leaf level))
//S:: O(2^n (copying leaf level to result array) *n (recursive call stack))
