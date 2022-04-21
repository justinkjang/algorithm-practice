/**
 * @param {string} s
 * @return {number}
 */

// a b c b h j k l l
var lengthOfLongestSubstring = function (s) {
  let map = {};
  let maxLen = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    let endChar = s[end];

    map[endChar] = map[endChar] + 1 || 1;

    while (map[endChar] > 1) {
      let startChar = s[start];
      map[startChar] = map[startChar] - 1;
      start++;
    }

    maxLen = Math.max(maxLen, end - start + 1);
  }

  return maxLen;
};

// Sliding Window
// Time = O(n^2) :: worstcase, nested loop.
// Space = O(n) :: Hash Table of input.
