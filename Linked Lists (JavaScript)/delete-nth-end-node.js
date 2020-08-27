// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
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
  }

  pop() {
    if (!this.head) return undefined;

    // if 1 item left
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return this;
    }

    let current = this.head;
    let newTail = current;
    let removed;

    while (current.next !== null) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail; // replace tail with second to last Node
    this.tail.next = null;
  }
}

function removeNthFromEnd(head, n) {
  let count = 0;

  let temp = head;
  let ptr1 = head;
  let last;
  let target = head;
  let targetIndex;

  while (true) {
    if (temp.next === null) break;

    temp = temp.next;
    count++;
  }

  count++;
  console.log('count', count);
  targetIndex = count - n;

  let j = 0;
  while (j !== targetIndex) {
    target = target.next;
    j++;
  }
  console.log('target', target);

  let list = new LinkedList();

  for (let i = 0; i < count; i++) {
    console.log(ptr1.val, ptr1.next);
    if (ptr1 !== target) {
      list.push(ptr1.val, ptr1.next);
    } else {
      null;
    }

    ptr1 = ptr1.next;
  }

  if (count === 2 && n === 1) {
    list.head.next = null;
    return list.head;
  }

  if (n === 1) list.pop();

  return list.head;
}
