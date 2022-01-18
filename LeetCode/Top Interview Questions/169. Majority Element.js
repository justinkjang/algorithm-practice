/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hashTable = {};

  for (let num of nums) {
    hashTable[num] = hashTable[num] + 1 || 1;
  }

  for (let key in hashTable) {
    if (hashTable[key] > Math.floor(nums.length / 2)) {
      return key;
    }
  }
};
