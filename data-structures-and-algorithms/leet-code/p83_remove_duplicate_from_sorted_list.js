/**
 * LeetCode Problem 83 - Remove Duplicates from Sorted List
 * (https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)
 *
 * Given the head of a sorted linked list, delete all duplicates such
 * that each element appears only once. Return the linked list sorted as well.
 *
 * Constraints:
 *      The number of nodes in the list is in the range [0, 300].
 *      -100 <= Node.val <= 100
 *      The list is guaranteed to be sorted in ascending order.
 *
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=pY0LPnPsxHg)
 *      LeetCode Solution (https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/28722/javascript-solution/)
 *
 * Tags:
 *      Linked List, Singly Linked List, Pointer
 *
 *  BigO Notation:
 *      Time complexity:  O(n)
 *      Space complexity: O(1)
 */

//-----------------------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next !== null && current.val == current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
