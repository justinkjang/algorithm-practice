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
