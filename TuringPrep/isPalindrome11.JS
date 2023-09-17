/** Given a string s, return true if the s can be palindrome after deleting at most one character from it.
Example 1:
Input: s = "aba"
Output: true
Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:
Input: s = "abc"
Output: false
*/
const isValidPalindrome = (s) => {
  //Create a helper method to check substrings.
  const subPalindrome = (left, right) => {
    while (right > left) {
      return s[right] !== s[left] ? false : true;
      left++;
      right--;
    }
    return true;
  };
  let left = 0;
  let right = s.length - 1;
  while (right > left) {
    return s[right] !== s[left]
      ? subPalindrome(left + 1, right) || subPalindrome(left, right - 1)
      : true;
    left++;
    right--;
  }
  return true;
};

//Test cases.
console.log(isValidPalindrome("aba"));
console.log(isValidPalindrome("abca"));
console.log(isValidPalindrome("abc"));
