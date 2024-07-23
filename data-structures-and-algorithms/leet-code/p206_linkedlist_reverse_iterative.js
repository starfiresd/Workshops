/**
 * LeetCode Problem 206 - Reverse Linked List (Iterative)
 * (https://leetcode.com/problems/reverse-linked-list/)
 *
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 *
 * Constraints:
 *      The number of nodes in the list is the range [0, 5000].
 *      -5000 <= Node.val <= 5000
 *
 * Follow up:
 *      A linked list can be reversed either iteratively or recursively. Could you implement both?
 *
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=DT3KOnLWR_o)
 *      LeetCode Solution (https://leetcode.com/problems/reverse-linked-list/solutions/5152548/video-solution-with-visualization/)
 *
 * Tags:
 *      Linked List, Singly Linked List, Iterative, Pointers
 *
 * BigO Notation (Iterative):
 *      Time complexity:  O(n)
 *      Space complexity: O(1)
 */

//-----------------------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  let current = head;
  let next = null;
  let prev = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
