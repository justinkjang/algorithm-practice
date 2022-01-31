/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  //edge case
  if (!head) return null;
  if (!head.next) return null;

  // fast slow method with third pointer

  let fast = head;
  let slow = head;
  let pointer = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      break;
    }
  }

  if (fast !== slow) return null;

  while (pointer !== slow) {
    slow = slow.next;
    pointer = pointer.next;
  }

  return pointer;
};

//T = linear S = constant
