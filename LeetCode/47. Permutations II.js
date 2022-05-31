//05 31 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];

  const dfs = (i, nums) => {
    // base
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    // dfs
    let hash = {};
    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

// 05 20 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    let hash = {};

    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;

      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};

// 05 19 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  const dfs = (i, nums) => {
    // base
    if (i === nums.length) {
      // 슬라이스로 복사본을 보내는 이유는 그 다음에 똑같은 nums를 reswap해야해서.
      result.push(nums.slice());
      return;
    }

    let hash = {};

    for (let j = i; j < nums.length; j++) {
      if (hash[nums[j]]) continue;
      hash[nums[j]] = true;

      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  return result;
};
// N! * N
// 05 19 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];

  const dfs = (i, nums) => {
    // base
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };

  dfs(0, nums);

  // filter duplicates
  let hash = {};
  for (let el of result) {
    if (hash[el]) continue;
    hash[el] = el;
  }

  return Object.values(hash);
};
// N! * N

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
