// 05 17 2022
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  // combination, permutation, subsets === DFS backtracking
  const result = [];

  const dfs = (i, s, slate) => {
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    let char = s[i];

    // if is not integer
    if (!Number.isInteger(parseInt(char))) {
      // upper case
      slate.push(char.toUpperCase());
      dfs(i + 1, s, slate);
      slate.pop();

      // lower case
      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();
    } else {
      slate.push(char);
      dfs(i + 1, s, slate);
      slate.pop();
    }
  };

  dfs(0, s, []);

  return result;
};
// Time: 2^n * n
// Space: 2^n * n

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  // global result
  let result = [];

  // Backtracking Depth First Search Recursive Helper Function
  const dfs = (i, s, slate) => {
    // backtracking case
    // base case
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    // recursive case

    // when its alphabet
    if (!Number.isInteger(parseInt(s[i]))) {
      // lower case
      slate.push(s[i].toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();

      // upper case
      slate.push(s[i].toUpperCase());
      dfs(i + 1, s, slate);
      slate.pop();
    } else {
      // when its number
      slate.push(s[i]);
      dfs(i + 1, s, slate);
      slate.pop();
    }
  };

  dfs(0, s, []);

  return result;
};

//T:: O(2^n *n)
//S:: O(2^n *n)
