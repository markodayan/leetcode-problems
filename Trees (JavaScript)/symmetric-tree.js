// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:

//     1
//    / \
//   2   2
//    \   \
//    3    3

// Follow up: Solve it both recursively and iteratively.

class TreeNode {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function isSymmetric(root) {
  function compare(node1, node2) {
    if (node1 === null && node2 === null) return true;

    if (node1 !== null && node2 !== null && node1.val === node2.val) {
      return (
        compare(node1.left, node2.right) && compare(node1.right, node2.left)
      );
    }

    return false;
  }

  return compare(root, root);
}
