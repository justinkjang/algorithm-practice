// 05 23 2022
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  const dfs = (i, n, slate, openCount, closeCount) => {
    //backtrack
    if (closeCount > openCount) return;
    if (openCount > n) return;

    // base
    if (i === n * 2) {
      result.push(slate.join(''));
      return;
    }

    slate.push('(');
    dfs(i + 1, n, slate, openCount + 1, closeCount);
    slate.pop();

    slate.push(')');
    dfs(i + 1, n, slate, openCount, closeCount + 1);
    slate.pop();
  };

  dfs(0, n, [], 0, 0);

  return result;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  // global result
  let result = [];

  // dfs recursion helper function && Back Tracking method
  const dfs = (i, n, slate, openCount, closeCount) => {
    // base case && backtracking case
    if (openCount > n) return;
    if (closeCount > openCount) return;
    if (i === n * 2) {
      result.push(slate.join(''));
      return;
    }

    // recursion case

    // adding open parentheses case
    slate.push('(');
    dfs(i + 1, n, slate, openCount + 1, closeCount); // (1, n, ['('], 1, 0)
    slate.pop();

    // adding close parentheses case
    slate.push(')');
    dfs(i + 1, n, slate, openCount, closeCount + 1);
    slate.pop();
  };

  dfs(0, n, [], 0, 0);

  return result;
};

//Search about time and space complexity. Can't understand
//T:: O(2^n*2 *n)
//S:: O(2^n *N)
