/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // global result
  let result = [];
  // need to sort nums for corrent slate placement
  nums.sort((a, b) => a - b);

  // dfs recursive helper function
  const dfs = (i, nums, slate) => {
    // base case
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    // recursive case

    // exclude
    dfs(i + 1, nums, slate);

    // include
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  // remove duplicates
  const hashMap = {};
  for (el of result) {
    if (hashMap[el]) continue;
    hashMap[el] = el;
  }

  return Object.values(hashMap);
};

//T&S:: O(2^n * 2n)
