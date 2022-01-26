/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // edge case
  if (s.length < 1 || s === null) return '';

  let longest = '';

  for (let i = 0; i < s.length; i++) {
    let odd = expandFromMiddle(s, i, i);
    let even = expandFromMiddle(s, i - 1, i);

    if (odd.length > longest.length) {
      longest = odd;
    }
    if (even.length > longest.length) {
      longest = even;
    }
  }

  return longest;
};

// a  a  b  b  a  a

const expandFromMiddle = (s, left, right) => {
  let i = 0;

  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }

  i--;

  return s.slice(left - i, right + i + 1);
};

// Expand from middle
// Time :: O(n^2)
// Space :: O(1) constant. only have one 'longest' in every case.
