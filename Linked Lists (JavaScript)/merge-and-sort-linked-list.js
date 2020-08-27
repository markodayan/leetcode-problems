// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val, next) {
    let newNode = new ListNode(val, next);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  reverse() {
    //swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(l1, l2) {
  if (!l1 && !l2) return null;
  let current1 = l1;
  let current2 = l2;
  let result = new LinkedList();
  let arr1 = [];
  let arr2 = [];

  while (true) {
    if (!l1) {
      arr1 = [];
      break;
    }
    arr1.push(current1.val);
    if (!current1.next) break;
    current1 = current1.next;
  }

  while (true) {
    if (!l2) {
      arr2 = [];
      break;
    }
    arr2.push(current2.val);
    if (!current2.next) break;
    current2 = current2.next;
  }

  let combined = arr1;

  for (let i = 0; i < arr2.length; i++) {
    combined.push(arr2[i]);
  }

  // lazy sort
  combined.sort(function (a, b) {
    return a - b;
  });

  for (let j = 0; j < combined.length; j++) {
    let val = combined[j];

    if (j === combined.length - 1) {
      result.push(val, null);
      return result.head;
    } else {
      result.push(val, combined[j + 1]);
    }
  }
}
