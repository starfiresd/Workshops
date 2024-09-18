/**
 * LeetCode Problem 20 - Valid Parenthesis (stack)
 * (https://leetcode.com/problems/valid-parentheses/)
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.*
 *
 * An input string is valid if:
 *
 *  1. Open brackets must be closed by the same type of brackets.
 *  2. Open brackets must be closed in the correct order.
 *  3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Constraints:
 *      1 <= s.length <= 10^4
 *      s consists of parentheses only '()[]{}'.
 *
 * Solution:
 *      YouTube (https://www.youtube.com/watch?v=HhBo1fckgBM)
 *      LeetCode Solution [alt sol] (https://leetcode.com/problems/valid-parentheses/solutions/3399077/easy-solutions-in-java-python-and-c-look-at-once-with-exaplanation/)
 *
 * Tags:
 *      Stack
 *
 * BigO Notation (stack):
 *      Time complexity:  O(n)
 *      Space complexity: O(n)
 */

//-----------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parens = "() [] {}";
  let i = 0;

  while (i < s.length) {
    stack.push(s[i]);
    i++;

    let open = stack[stack.length - 2];
    let close = stack[stack.length - 1];
    let check = open + close;

    if (parens.includes(check)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length == 0;
};
