// 07 05 2022
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // sliding window approach
  // we have a max var, start var, acc var
  // traverse array with 'end' var, each element is added to acc.
  // when end - start = k, we compare max avg with max var.
  // return max

  // we only traverse array once, thus linear operation.

  let max = -Infinity;
  let start = 0;
  let acc = 0;

  for (let end = 0; end < nums.length; end++) {
    acc += nums[end];

    if (end - start === k - 1) {
      max = Math.max(max, acc / k);

      acc -= nums[start];
      start++;
    }
  }

  return max;
};

//06 24 2022
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // SLIDING WINDOW
  // keywords:: contiguous, subarray

  // Bruteforce:: t:n^2 s:n
  // Sliding Window:: t:n s:1

  //max variable, start, end, soFar
  let max = -Infinity;
  let windowStart = 0;
  let soFar = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    soFar += nums[windowEnd];

    if (windowEnd - windowStart === k - 1) {
      let avg = soFar / k;
      max = Math.max(max, avg);

      soFar -= nums[windowStart];
      windowStart++;
    }
  }

  return max;
};

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
