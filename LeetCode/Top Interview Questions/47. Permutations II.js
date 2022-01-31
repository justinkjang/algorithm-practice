/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  //global result
  let result = [];

  // dfs recursive helper
  const dfs = (i, nums) => {
    // base case
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    // recursive case
    let map = {};
    for (let j = i; j < nums.length; j++) {
      // remove duplicates using hash
      if (map[nums[j]]) continue;
      map[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

//T&S:: O(n!*n)
