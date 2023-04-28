// // You are given the heads of two sorted linked lists list1 and list2.

// // Merge the two lists in a one sorted list. The list should be made by splicing together 
// // the nodes of the first two lists.

// // Return the head of the merged linked list.


// //Definition for singly-linked list.
// function ListNode(val, next = null) {
//   this.val = val
//   this.next = next
// }

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// const mergeTwoLists = function (l1, l2) {
//   // Check if either of the lists is null 
//   if (!l1) {
//     return l2;
//   }

//   if (!l2) {
//     return l1;
//   }

//   // Head of the new linked list - this is the head of the resultant list
//   let head = null;
//   // Reference of head which is null at this point
//   let temp = head;
//   // Choose head which is smaller of the two lists
//   console.log(l1.val, "l1.val>>>>>>>>>>>>>>>>>>>", l2.val, "l23>>>>>>>>>>>.val")
//   if (l1.val < l2.val) {
//     temp = head = new ListNode(l1.val);
//     l1 = l1.next;
//   } else {
//     temp = head = new ListNode(l2.val);
//     l2 = l2.next;
//   }
//   // Loop until any of the list becomes null
//   while (l1 && l2) {
//     if (l1.val < l2.val) {
//       temp.next = new ListNode(l1.val);
//       l1 = l1.next;
//       temp = temp.next;
//     } else {
//       temp.next = new ListNode(l2.val);
//       l2 = l2.next;
//       temp = temp.next;
//     }
//   }
//   // Add all the nodes in l1, if remaining
//   while (l1) {
//     temp.next = new ListNode(l1.val);
//     l1 = l1.next;
//     temp = temp.next;
//   }
//   // Add all the nodes in l2, if remaining
//   while (l2) {
//     temp.next = new ListNode(l2.val);
//     l2 = l2.next;
//     temp = temp.next;
//   }
//   return head;
// };


// console.log(">????????????", mergeTwoLists({ val: 1, next: { val: { val: 2, next: { val: 4, next: null } } } },

//   { val: 1, next: { val: { val: 3, next: { val: 4, next: null } } } }))


class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next
  }
}


function sortTwoLinkedLists(list1, list2) {
  let dummy = new ListNode(0);
  let tail = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  tail.next = (list1 !== null) ? list1 : list2;

  return dummy.next;
}

// list1 = 1 -> 5 -> 7 -> 9
// list2 = 2 -> 4 -> 6 -> 8

const list1 = { val: 1, next: { val: 5, next: { val: 7, next: { val: 9, next: null } } } }
const list2 = { val: 2, next: { val: 4, next: { val: 6, next: { val: 8, next: null } } } }
console.log(JSON.stringify(sortTwoLinkedLists(list1, list2)))
