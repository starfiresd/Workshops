/**
 * LeetCode Problem 258 - Add Digits
 * (https://leetcode.com/problems/add-digits/)
 *
 * Given an integer num, repeatedly add all its digits
 * until the result has only one digit, and return it.
 *
 *  Example 1
 *      Input: num = 38
 *      Output: 2
 *      Explanation: The process is
 *          38 --> 3 + 8 --> 11
 *          11 --> 1 + 1 --> 2
 *          Since 2 has only one digit, return it.
 *
 *  Example 2
 *      Input: num = 0
 *      Output: 0
 *
 * Constraints:
 *      0 <= num <= 2^31 - 1
 *
 * Follow up:
 *      Could you do it without any loop/recursion in O(1) runtime?
 *
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=mVICpcBoGvs)
 *      LeetCode Solution (https://leetcode.com/problems/add-digits/solutions/3631352/add-digits-simple-approach-recursive-c-java-python-javascript-o-1/)
 *
 * Tags:
 *      Math
 *
 * BigO Notation (stack):
 *      Time complexity:  O(n)
 *      Space complexity: O(1)
 */

//-----------------------------------------------------------------------------------------

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let result = num;
  while (num >= 10) {
    result = 0;
    while (num != 0) {
      result += num % 10;
      num = Math.floor(num / 10);
    }
    num = result;
  }
  return result;
};
