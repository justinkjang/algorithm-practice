/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let ht = {};

  for (let i = 0; i < s.length; i++) {
    ht[s[i]] = ht[s[i]] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    ht[t[j]] = ht[t[j]] - 1 || 0;
  }

  console.log(ht);
  // for (key in ht) {
  //     if(ht[key] > 0) return false
  // }
  // return true
};
