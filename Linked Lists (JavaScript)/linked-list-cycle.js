// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?

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

  hasCycle() {
    let links = {};
    let temp = this.head;

    while (true) {
      if (!temp.next) {
        console.log('false loop');
        return false;
      }

      let highest = Math.max(temp.val, temp.next.val);
      let lowest = Math.min(temp.val, temp.next.val);

      let key = [lowest, highest].join('');

      if (!links[key]) {
        links[key] = 1;
      } else {
        return true;
      }

      temp = temp.next;
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

function hasCycle(head) {
  if (!head) return false;
  let list = new LinkedList();
  list.head = head;

  return list.hasCycle();
}
