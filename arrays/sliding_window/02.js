var lengthOfLongestSubstring = function (s) {
  let len = 0;
  let left = 0;
  let map = new Map();
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right]) + 1);
    }
    map.set(s[right], right);
    len = Math.max(len, right - left + 1);
  }

  return len;
};
let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
