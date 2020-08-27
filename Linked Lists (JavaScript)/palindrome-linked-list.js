// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
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

  headToList(head) {
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
      this.push(ptr.val, ptr.next);
      ptr = ptr.next;
    }
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

function isPalindrome(head) {
  let list = new LinkedList();
  list.headToList(head);
  let len = list.length;

  let reversedList = new LinkedList();
  reversedList.headToList(head);
  reversedList.reverse();

  let ptr1 = list.head;
  let ptr2 = reversedList.head;

  for (let i = 0; i < len; i++) {
    if (ptr1.val !== ptr2.val) return false;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return true;
}
