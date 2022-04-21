/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let ht = {};
  let result = [];

  for (let i of nums1) {
    if (!ht[i]) {
      ht[i] = 1;
    } else {
      ht[i]++;
    }
  }

  for (let i of nums2) {
    if (ht[i] > 0) {
      result.push(i);
      ht[i]--;
    }
  }

  return result;
};
