/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let result = null; // will contain the answer node

  // dfs recursive
  const dfs = (node) => {
    // base case
    if (node === null) return false;

    // recursive case
    let left = dfs(node.left);
    let right = dfs(node.right);

    // action
    let cur = node === p || node === q; // if current node equals P or Q, will return true

    if (left + right + cur >= 2) result = node; // true equals 1, so having two true will mean that current node is LCA

    return left || right || cur; // any one of three being true will send back "true" in the call stack.
  };

  dfs(root);
  return result;
};
// HINT! dfs recursive, bottom up. true or false call stacks.
// T = n, S = height
