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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  const newNode = new TreeNode(val);
  if (!root) return newNode;

  let cur = root;
  let prev = null;

  while (cur) {
    if (val > cur.val) {
      prev = cur;
      cur = cur.right;
    } else {
      prev = cur;
      cur = cur.left;
    }
  }

  if (val > prev.val) {
    prev.right = newNode;
  } else {
    prev.left = newNode;
  }

  return root;
};
// HINT! In binary search tree (BST):: all the nodes on right subtree, value is greater then the root value & all the nodes on left subtree, value is less then the root value.
// T = N if BST is unbalanced. log n if BST is balanced. S = 1
