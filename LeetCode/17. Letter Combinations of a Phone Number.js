/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // global result
  const result = [];

  // edge case - empty input = []
  if (digits.length === 0) return [];

  // hash map
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  // dfs recursive helper
  const dfs = (i, digits, slate) => {
    // base case
    if (i === digits.length) {
      result.push(slate.join(''));
      return;
    }

    // dfs recursive case
    let chars = map[digits[i]]; // 'abc'

    for (let char of chars) {
      slate.push(char);
      dfs(i + 1, digits, slate);
      slate.pop();
    }
  };

  dfs(0, digits, []);

  return result;
};

//Time:: O(4^n * n) max 4 trees and linear scan at the end
//Space:: O(4^n * n)
