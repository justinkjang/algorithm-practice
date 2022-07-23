// 07 23 2022
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // use hashmap with
  // key as char, val as num of char

  const hash = {};
  for (let char of s) {
    if (!hash[char]) {
      hash[char] = 1;
    } else {
      hash[char] += 1;
    }
  }

  for (let char of t) {
    if (!hash[char]) {
      return false;
    } else {
      hash[char]--;
    }
  }

  return Object.values(hash).every((val) => val === 0);
};

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
