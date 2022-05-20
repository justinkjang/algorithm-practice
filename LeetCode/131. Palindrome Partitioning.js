// 05 20 2022
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }

  return true;
};
var partition = function (s) {
  const result = [];

  const dfs = (i, s, slate) => {
    // base: when reached leaf lvl
    if (i === s.length) {
      result.push(slate.slice());
      return;
    }
    // dfs: push to slate if palindrome
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        slate.push(s.slice(i, j + 1));
        dfs(j + 1, s, slate);
        slate.pop();
      }
    }
  };

  dfs(0, s, []);

  return result;
};
