/**
 * LeetCode Problem 509 - Fibonacci Number
 * (https://leetcode.com/problems/fibonacci-number/)
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of the two preceding ones,
 * starting from 0 and 1. That is,
 *      F(0) = 0, F(1) = 1
 *      F(n) = F(n - 1) + F(n - 2), for n > 1.
 *      Given n, calculate F(n).
 *
 * Constraints:
 *      0 <= n <= 30
 *
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=kIzjdvU_QIU)
 *      LeetCode Solution (https://leetcode.com/problems/fibonacci-number/solutions/4586217/5-different-approach-full-explained-java-c-c-python3-rust-javascript/)
 *
 * Tags:
 *      Fibonacci, Recursion
 *
 * BigO Notation (Recursion):
 *      Time complexity:  O(2^n)
 *      Space complexity: O(n)
 */

//-----------------------------------------------------------------------------------------

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};
