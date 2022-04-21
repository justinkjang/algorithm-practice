/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // base case
  if (!preorder.length && !inorder.length) return null;

  // create node
  let root = new TreeNode(preorder[0]); // S
  let midIdx = inorder.indexOf(root.val); // T

  // recursion case
  root.left = buildTree(
    preorder.slice(1, midIdx + 1),
    inorder.slice(0, midIdx)
  ); // T,S
  root.right = buildTree(preorder.slice(midIdx + 1), inorder.slice(midIdx + 1)); // T,S

  return root;
};
// HINT! Recursion, difference between In, Pre order
// T = ? S = ?
