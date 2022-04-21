/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let start = 0;
  let acc = 0;

  for (let end = 0; end < nums.length; end++) {
    acc += nums[end];

    if (end - start === k - 1) {
      let avg = acc / k;
      max = Math.max(avg, max);
      acc -= nums[start];
      start++;
    }
  }

  return max;
};

//HINT! Sliding Window Method.
// T = n, S = 1
