/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const hash = {};

  for (let num of nums) {
    hash[num] = hash[num] + 1 || 1;
  }

  for (let key in hash) {
    if (hash[key] === 1) {
      return key;
    }
  }
};
