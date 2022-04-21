var inoderSuccessor = function (root, p) {
  // if p have a right subtree.
  if (p.right) {
    let cur = p.right;
    let prev = null;

    while (cur) {
      prev = cur;
      cur = cur.left;
    }

    return prev;
  }

  // if p have no right subtree
  let cur = root;
  let prev = null;

  while (p !== cur) {
    if (cur.val < p.val) {
      cur = cur.right;
    } else {
      prev = cur;
      cur = cur.left;
    }
  }

  return prev;
};
// HINT! brute force: push all nodes in-order traverse into array, get num next to p. T = n, S = n
// Opt! Two pointer. right Subtree | max node before reach p. T = log n if balanced. S = 1.
