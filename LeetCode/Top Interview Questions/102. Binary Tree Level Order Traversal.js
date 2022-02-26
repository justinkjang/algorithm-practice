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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  //error case
  if (!root) return [];

  const queue = [root]; // [[3]]
  const result = [];

  while (queue.length) {
    // 1 (true)
    let len = queue.length; // 1 -> 2 -> 4
    result.push(queue.map((node) => node.val)); //[[3], [9, 20]]

    while (len--) {
      // repeat by number of branch
      let node = queue.shift(); // node takes queue[0] value away from queue array

      if (node.left) queue.push(node.left); // refill queue arr with child node, if exist.
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};
// HINT! binary tree template.
// t = n, s = n
