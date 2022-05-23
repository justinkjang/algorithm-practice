// 05 23 2022
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let result = 0;

  const dfs = (i, nums, target) => {
    if (i === nums.length) {
      if (target === 0) {
        result += 1;
      }
      return;
    }

    let currNum = nums[i];
    dfs(i + 1, nums, target + currNum);

    dfs(i + 1, nums, target - currNum);
  };

  dfs(0, nums, target);

  return result;
};
// exclude and include dfs
// Time 2^n * n
