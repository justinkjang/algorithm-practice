/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));

    while (len--) {
      let node = queue.shift();
      for (let child of node.children) {
        queue.push(child);
      }
    }
  }

  return result;
};
// HINT! Breadth First Search. N-ary => use node.children
// t = n, s = n
