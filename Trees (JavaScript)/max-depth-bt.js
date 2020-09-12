// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

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

function maxDepth(root) {
  if (!root) return 0;

  let current = root;

  let traversals = 0;
  let max = 0;

  function traverse(node) {
    if (node.left) {
      if (node === root) traversals = 0;
      traversals++;
      traverse(node.left);
    }

    if (node.right) {
      if (node === root) traversals = 0;
      traversals++;
      traverse(node.right);
    }

    if (!node.right && !node.left) {
      console.log(traversals, node.val);
      max = Math.max(traversals, max);
    }

    // end of traversal path -> head back to parent node
    traversals--;
  }

  traverse(current);

  // plus one to include root
  return max + 1;
}
