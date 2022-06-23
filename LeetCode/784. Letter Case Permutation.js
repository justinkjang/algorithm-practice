// 06 23 2022
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  // dfs recursion
  // a or A
  // a1   A1
  // a1b  a1B

  // if letter go lower and uppercase
  // if number go straight down
  // at leaf level, push that slate using join'' to the result array

  const result = [];

  const dfs = (i, s, slate) => {
    //base case
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    // recursive case
    let char = s[i];
    if (!Number.isInteger(parseInt(char))) {
      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();

      slate.push(char.toUpperCase());
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
//Time:: 2^n * n
//Space:: n * n^2

// 05 31 2022
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  // binary dfs

  const result = [];

  const dfs = (i, s, slate) => {
    // base
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    // dfs
    if (Number.isInteger(parseInt(s[i]))) {
      slate.push(s[i]);
      dfs(i + 1, s, slate);
      slate.pop();
    } else {
      slate.push(s[i].toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();

      slate.push(s[i].toUpperCase());
      dfs(i + 1, s, slate);
      slate.pop();
    }
  };

  dfs(0, s, []);

  return result;
};
//2^n * n Time

// 05 20 2022
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [];

  const dfs = (i, s, slate) => {
    // base
    if (i === s.length) {
      result.push(slate.join(''));
      return;
    }

    // dfs
    let char = s[i];

    if (!Number.isInteger(parseInt(char))) {
      slate.push(char.toLowerCase());
      dfs(i + 1, s, slate);
      slate.pop();

      slate.push(char.toUpperCase());
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
