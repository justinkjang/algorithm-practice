// PREMIUM

const uniValue = (root) => {
  // edge case
  if (!root) return 0;

  // global
  let count = 0;

  // dfs bottom-top recursive
  const dfs = (node) => {
    // base case
    if (node.left === null && node.right === null) {
      count++;
      return true;
    }

    // recursive case
    let uniVal = true;
    if (node.left) {
      let left = dfs(node.left);
      uniVal = left && uniVal && node.val === node.left.val;
    }
    if (node.right) {
      let right = dfs(node.right);
      uniVal = right && uniVal && node.val === node.right.val;
    }

    if (uniVal) count++;
    return uniVal;
  };

  dfs(root);
  return count;
};
// HINT! bottom-top DFS.
// T = n, S = h
