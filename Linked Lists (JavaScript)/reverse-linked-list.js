// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
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

function reverseList(head) {
  if (!head) return null;

  let count = 0;
  let ptr = head;
  let temp = head;

  while (true) {
    if (!temp.next) break;

    temp = temp.next;
    count++;
  }

  let list = new LinkedList();

  for (let i = 0; i <= count; i++) {
    console.log(i);
    list.push(ptr.val, ptr.next);
    ptr = ptr.next;
  }

  console.log(list);

  list.reverse();

  return list.head;
}
