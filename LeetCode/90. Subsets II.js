// 05 20 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    dfs(i + 1, nums, slate);

    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  let hash = {};
  for (let el of result) {
    if (hash[el]) continue;
    hash[el] = el;
  }

  return Object.values(hash);
};

// 05 18 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    dfs(i + 1, nums, slate);

    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  const hash = {};

  for (let el of result) {
    if (hash[el]) continue;
    hash[el] = el;
  }

  return Object.values(hash);
};

// 05 17 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b);

  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      result.push(slate.slice());
      return;
    }

    let el = nums[i];

    dfs(i + 1, nums, slate);

    slate.push(el);
    dfs(i + 1, nums, slate);
    slate.pop();
  };

  dfs(0, nums, []);

  // filter out duplicates
  let hash = {};
  for (let el of result) {
    if (hash[el]) continue;
    hash[el] = el;
  }

  return Object.values(hash);
};

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
