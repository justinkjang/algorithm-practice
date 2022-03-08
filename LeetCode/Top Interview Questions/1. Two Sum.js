// 03 08 2022
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potKey = target - nums[i];

    if (hash[potKey] && hash[potKey] !== i) {
      return [i, hash[potKey]];
    }
  }
};
//HINT! brute = n^2. instead use HASH & target - nums[i]
//T = n, s = n

// 1. Two Sum
// andy gala
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  for (let i = 0; i < nums.length; i++) {
    let potentialKey = target - nums[i];

    if (hash[potentialKey] && hash[potentialKey] !== i) {
      return [i, hash[potentialKey]];
    }
  }
};
//T = n, s = n

// brute force
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};
// Two-pass Hash Table (JS object)
var twoSum = function (nums, target) {
  let indices = {};

  nums.forEach((item, index) => {
    indices[item] = index;
  });

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (indices[complement] != undefined && indices[complement] != i) {
      return [i, indices[complement]];
    }
  }
};
// One-pass Hash Table
var twoSum = function (nums, target) {
  const indices = new Map();

  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];

    if (indices.has(complement)) {
      return [indices.get(complement), index];
    }

    indices.set(nums[index], index);
  }
};
