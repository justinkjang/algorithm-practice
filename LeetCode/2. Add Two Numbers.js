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
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(-1);
  let node = head;

  while (l1 || l2 || carry) {
    // if .val is null, I need to make it 0
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;

    let nextDigit = (l1Val + l2Val + carry) % 10;
    node.next = new ListNode(nextDigit);
    node = node.next;

    carry = Math.floor((l1Val + l2Val + carry) / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return head.next;

  // TimeC = O(n) :: go through each list once. 2N.
  // SpaceC = O(n) :: create new ListNode relative to linear input. N.
};
