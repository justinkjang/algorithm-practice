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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // error case
  if (!root) return 0;

  // global
  let max = 0;

  // dfs
  const dfs = (node) => {
    // base case
    if (!node) return 0;

    // recursive case
    let leftLen = dfs(node.left);
    let rightLen = dfs(node.right);

    // update max
    max = Math.max(leftLen + rightLen, max);

    // add length going up callstack
    return Math.max(leftLen, rightLen) + 1;
  };

  dfs(root);
  return max;
};
// HINT! Recursive, dfs, global max
// T = n, S = n
