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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // return switched left val and right val until reach null
  // Time: n (reaching every node once) Space: n (recursion taking worst case n tree level - all nodes on left)

  //base case
  if (root === null) return null;

  //dfs
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]; // 4 - (7) - (2)
  // at each tree level
  return root; //(7)
};
