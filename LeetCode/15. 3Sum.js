//06 24 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let twoSum = function (start, nums, target) {
  let arr = [];

  let end = nums.length - 1;

  while (start < end) {
    if (target === nums[start] + nums[end]) {
      arr.push([target * -1, nums[start], nums[end]]);
      //remove duplicates
      while (start < end && nums[start] === nums[start + 1]) start++;
      while (start < end && nums[end] === nums[end - 1]) end--;
      start++;
      end--;
    } else if (target < nums[start] + nums[end]) {
      end--;
    } else if (target > nums[start] + nums[end]) {
      start++;
    }
  }

  return arr;
};
var threeSum = function (nums) {
  // Extension of two sums problem
  // set target as -integer of a traversing element of nums array
  // use two pointer, start and end, to check if two sums target.
  // there may be duplicate, so to avoid that, we will use "sort" and "continue" duplicating elements.

  const result = [];
  nums.sort((a, b) => a - b);

  //traverse each element as target
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;

    let subResult = twoSum(i + 1, nums, target);
    //spread subresult array
    result.push(...subResult);
  }

  return result;
};

// 05 13 2022
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // sort = n log n
  nums.sort((a, b) => a - b);

  let result = [];

  // n
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;

    // n
    let subResult = twoSum(i + 1, target, nums);

    result.push(...subResult);
  }

  return result;
};

function twoSum(j, target, nums) {
  let k = nums.length - 1;

  let result = [];

  while (j < k) {
    if (nums[j] + nums[k] > target) {
      k--;
    } else if (nums[j] + nums[k] < target) {
      j++;
    } else {
      result.push([target * -1, nums[j], nums[k]]);
      while (j < k && nums[j] === nums[j + 1]) j++;
      while (j < k && nums[k] === nums[k - 1]) k--;
      j++;
      k--;
    }
  }

  return result;
}
// Time: n^2
// Space: n

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// [-1,0,1,2,-1,-4]
const twoSum = (target, left, nums) => {
  let right = nums.length - 1;
  let result = []; // [[-1,-1,2],[-1,0,1]] elements inside this result will be pushed as spread operator to the global result

  while (left < right) {
    let leftVal = nums[left];
    let rightVal = nums[right];

    if (leftVal + rightVal < target) left++;
    if (leftVal + rightVal > target) right--;
    if (leftVal + rightVal === target) {
      result.push([target * -1, leftVal, rightVal]);
      // below is to skip duplicating triplets
      while (left < right && nums[left] === nums[left + 1]) left++;
      while (left < right && nums[right] === nums[right - 1]) right--;
      left++;
      right--;
    }
  }

  return result;
};

var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let target = nums[i] * -1;
    let subResult = twoSum(target, i + 1, nums);

    result.push(...subResult); // subResult may contain multiple arrays inside array so..
  }

  return result;
};

// major concept is to have one of the values multipled by -1 will equal to the sum of the other two values.
// Sort Array, let 'i' be a pointer, and run 'TwoSum' helper function inside it. Target value will be i * -1
//Edge Case is to not contain duplicate answers, we have to skip pointers that are same as the previous value.
//TwoSum helper function will have left pointer and right pointer that moves based on whether it is bigger or smaller than target value.

//Time:: O(n^2) because for loop -> while loop
//Space:: O(n)
