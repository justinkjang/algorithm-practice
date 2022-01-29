/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let prev = new ListNode(-1);
  prev.next = head;
  let remove = head;
  let cur = head;
  let result = prev;

  let count = 0;

  while (count < n) {
    cur = cur.next;
    count++;
  }

  while (cur) {
    prev = prev.next;
    remove = remove.next;
    cur = cur.next;
  }

  prev.next = remove.next;

  return result.next;
};
