/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  // edge case
  if (!root) return [];

  const result = [];

  // dfs helper
  const dfs = (node, sum, slate) => {
    // base case
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        slate.push(node.val);
        result.push(slate.slice()); // why pushing a copy of slate? because we need to make copy of the slate at this specific moment within recursive call stack.
        slate.pop();
      }
    }

    // recursive case
    if (node.left) {
      slate.push(node.val);
      dfs(node.left, sum - node.val, slate);
      slate.pop();
    }
    if (node.right) {
      slate.push(node.val);
      dfs(node.right, sum - node.val, slate);
      slate.pop();
    }
  };

  dfs(root, targetSum, []);

  return result;
};
// HINT! DFS recursive pattern with slate
// T = n^2, S = n
