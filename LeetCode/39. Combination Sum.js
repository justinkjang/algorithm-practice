// 05 19 2022
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  candidates.sort((a, b) => a - b);

  const result = [];

  const dfs = (i, candidates, target, slate) => {
    // backtrack: if sum exceeds target
    if (target < 0) return;
    // base: if sum = target
    if (target === 0) {
      result.push(slate.slice());
      return;
    }
    //dfs
    for (let j = i; j < candidates.length; j++) {
      let num = candidates[j];

      slate.push(num);
      dfs(j, candidates, target - num, slate);
      slate.pop();
    }
  };

  dfs(0, candidates, target, []);

  return result;
};
// combination problem complexities norm:
// Time & Space: 2^n * n
// in this case its really hard to know complexity due to duplicates.
