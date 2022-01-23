/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let ht = {};

  for (let letter of s) {
    ht[letter] = ht[letter] + 1 || 1;
  }

  for (let letter of t) {
    if (ht[letter] === undefined) {
      return false;
    }
    if (ht[letter] < 1) {
      return false;
    }
    ht[letter]--;
  }

  return true;
};
