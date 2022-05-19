// 05 19 2022
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];

  const dfs = (candidates, i, target, slate) => {
    // backtrack
    // if number bigger than target
    if (target < 0) return;
    // base
    if (target === 0) {
      result.push(slate.slice());
      return;
    }

    let hash = {};

    for (let j = i; j < candidates.length; j++) {
      let num = candidates[j];

      if (hash[num]) continue;
      hash[num] = num;

      slate.push(num);
      dfs(candidates, j + 1, target - num, slate);
      slate.pop();
    }
  };

  dfs(candidates, 0, target, []);

  return result;
};
