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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // counting height from bottom to top.
  // Time = n , Space = height or worst case n

  const dfs = (node) => {
    if (node === null) return null;

    if (node) {
      let left = 1 + dfs(node.left); // height, leaf = 1
      let right = 1 + dfs(node.right);
      let isBalanced = Math.abs(left - right) <= 1; // true or false

      return isBalanced ? Math.max(left, right) : Infinity; // if false, bubble up Infinity height
    }
  };

  return dfs(root) !== Infinity;
};
