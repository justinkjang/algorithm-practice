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
var maxDepth = function (root) {
  if (root === undefined || root === null) {
    return 0; // key!!! exit point = max(0,0)
  }

  return 1 + Math.max(maxDepth(root.right), maxDepth(root.left));
};

// DFS another way

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
var maxDepth = function (root) {
  let depth = 0;

  let DFS = (node, level) => {
    if (!node) return;

    if (depth < level) depth = level;

    DFS(node.left, level + 1);
    DFS(node.right, level + 1);
  };

  DFS(root, 1);

  return depth;
};
