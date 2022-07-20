// 07 19 2022
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // create dummy node
  // while l1 and l2 exist, compare and attach the dummy to smaller one
  // move next of the smaller list to its next
  // move node pointer to its next
  // attach remaining nodes

  // Time = n, Space = 1 (because we attaching linked list)

  let head = new ListNode();
  let node = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }

    //moving node pointer to next
    node = node.next;
  }

  node.next = list1 || list2;

  return head.next;
};

// MY ANSWER O(3n)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let a = list1;
  let b = list2;

  let arr = [];

  while (a) {
    let valA = a ? a.val : null;

    arr.push(valA);

    a = a.next;
  }

  while (b) {
    let valB = b ? b.val : null;

    arr.push(valB);

    b = b.next;
  }

  arr.sort((a, b) => a - b);

  let head = new ListNode(null);
  let node = head;

  for (let i = 0; i < arr.length; i++) {
    node.next = new ListNode(arr[i]);
    node = node.next;
  }

  return head.next;
};

// Other ANSWER. not using array. only ListNode
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode(null);
  let node = head;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      node.next = list2;
      list2 = list2.next;
    } else {
      node.next = list1;
      list1 = list1.next;
    }

    node = node.next;
  }

  node.next = list1 || list2;

  return head.next;
};
