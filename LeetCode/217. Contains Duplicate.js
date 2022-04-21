/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let ht = {};

  for (num of nums) {
    ht[num] = ht[num] + 1 || 0;

    if (ht[num] > 0) return true;
  }

  return false;
};
