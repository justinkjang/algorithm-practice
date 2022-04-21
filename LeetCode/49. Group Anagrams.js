/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let sortedStrs = strs.map((word) => word.split('').sort().join(''));

  let ht = {};

  for (let i = 0; i < strs.length; i++) {
    if (!ht[sortedStrs[i]]) {
      ht[sortedStrs[i]] = [strs[i]];
    } else {
      ht[sortedStrs[i]].push(strs[i]);
    }
  }

  return Object.values(ht);
};

//HINT! hashtable, copy of sorted str array.
// t= n*a log a, s= n
