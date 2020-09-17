// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var levelOrder = function (root) {
  let obj = {};
  let result = [];

  // DFS pre order function
  function preorder(root, level, obj) {
    if (!root) return;

    if (!obj[level]) {
      obj[level] = [root.val];
    } else {
      obj[level].push(root.val);
    }

    // do for left and right subtrees and increase level
    preorder(root.left, level + 1, obj);
    preorder(root.right, level + 1, obj);
  }

  preorder(root, 1, obj);

  for (let key in obj) {
    result.push(obj[key]);
  }

  return result;
};
