/**
 * LeetCode Problem 141 - Linked List Cycle
 * (https://leetcode.com/problems/linked-list-cycle/)
 * 
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * 
 * There is a cycle in a linked list if there is some node in the list that can be reached 
 *      again by continuously following the next pointer. Internally, pos is used to denote 
 *      the index of the node that tail's next pointer is connected to. 
 *      Note that pos is not passed as a parameter.
 * 
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 * 
 * Constraints:
 *      The number of the nodes in the list is in the range [0, 104].
 *      -105 <= Node.val <= 105
 *      pos is -1 or a valid index in the linked-list.
 * 
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=gBTe7lFR3vc)
 *      LeetCode Solution (https://leetcode.com/problems/linked-list-cycle/solutions/3999014/99-68-two-pointer-hash-table/)
 * 
 * Tags:
 *      Floyd's Cycle-Finding Algorithm, Tortoise and Hare Algorithm, Two Pointer Method
 *      Linked List, Singly Linked List
 */

//-----------------------------------------------------------------------------------------

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
        return true;
        }
    }
  return false;
};

