/**
 * LeetCode Problem 125 - Valid Palindrome
 * (https://leetcode.com/problems/valid-palindrome/)
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Constraints:
 *      1 <= s.length <= 2 * 10^5
 *      s consists only of printable ASCII characters
 *
 * Solution:
 *      YouTube ()
 *      LeetCode Solution (https://leetcode.com/problems/valid-palindrome/solutions/2438656/very-easy-100-fully-explained-java-c-python-js-python3/)
 *
 * Tags:
 *      Palindrome, Two Pointers, Pointers
 *
 * BigO Notation:
 *      Time complexity:  O(n)
 *      Space complexity: O(1)
 */

//-----------------------------------------------------------------------------------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    // iterate to next alphanumeric value from start
    while (start < s.length && !isAlphaNum(s[start])) start++;

    // iterate to next alphanumeric value from end
    while (end >= 0 && !isAlphaNum(s[end])) end--;

    // verify pointers have not crosseed paths
    if (start >= s.length || end < 0) break;

    // check if pointer match, return false if they do not
    if (start < end && s[start].toLowerCase() !== s[end].toLowerCase())
      return false;

    // iterate to next character
    start++;
    end--;
  }

  return true;
};

function isAlphaNum(letter) {
  return (
    (48 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 57) || // ascii numbers
    (65 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 90) || // ascii uppercase letters
    (97 <= letter.charCodeAt(0) && letter.charCodeAt(0) <= 122) // ascii lowercase letters
  );
}
