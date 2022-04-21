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

let reverse = (head) => {
  let curr = head;
  let prev = null;
  let next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let length = 0;
  let start = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length++;
  }

  let reversed = reverse(slow);

  while (length) {
    length--;
    if (reversed.val !== start.val) return false; // dont forget to add .val when comparing values

    reversed = reversed.next;
    start = start.next;
  }

  return true;
};
