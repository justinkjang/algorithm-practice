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
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // error case
  if (!root) return false;

  let hasTarget = false;

  const dfs = (node, sum) => {
    // base case
    if (node.left === null && node.right === null) {
      if (node.val === sum) {
        hasTarget = true;
      }
      return;
    }

    // recursion case
    if (node.left) {
      dfs(node.left, sum - node.val);
    }
    if (node.right) {
      dfs(node.right, sum - node.val);
    }
  };

  dfs(root, targetSum);

  return hasTarget;
};
// HINT! DFS recursive call stack pattern
// T = n S = height of the tree, worst case in unbalanced tree = n
