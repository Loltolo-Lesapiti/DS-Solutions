/**
 * Given a string s, find the length of the longest substring
 without repeating characters.
Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
const longestSubStr = (str) => {
  //Declare a set, starting, current position and the length of the longest substring.
  let visited = new Set();
  let startPos = 0,
    currentPos = 0,
    longestSubStr = 0;
  while (currentPos < str.length) {
    //Check is the item is in the visited set. If its there, delete the left most item, the begining,
    //then increment the starting point and continue.
    if (visited.has(str[currentPos])) {
      visited.delete(str[startPos++]);
    } else {
      //Add an item to the set if its not there meaning its not repeated and increment currentPos of the set.
      visited.add(str[currentPos++]);
      //Set longest substring.
      longestSubStr = Math.max(longestSubStr, visited.size);
    }
  }
  return longestSubStr;
};
console.log(longestSubStr("abcabcbb"));
console.log(longestSubStr("bbbbb"));
console.log(longestSubStr("pwwkew"));
