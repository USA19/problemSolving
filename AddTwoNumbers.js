
//  * Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // loop through each list and add their number one by one
  let newList = new ListNode();
  let head = newList;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1 && l1.val ? l1.val : 0;
    const val2 = l2 && l2.val ? l2.val : 0;
    const sum = val1 + val2 + carry;
    // reinitialized the carry
    carry = 0
    const value = parseInt(sum % 10)
    carry = parseInt(sum / 10)

    head.next = new ListNode(value);
    head = head.next;

    l1 = l1 && l1.next ? l1.next : null;
    l2 = l2 && l2.next ? l2.next : null;

  }

  return newList.next
};