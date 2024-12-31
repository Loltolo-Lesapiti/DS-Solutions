var isSubsequence = function (s, t) {
  let count = 0;
  for (let char of t) {
    if (count == s.length) {
      break;
    }
    if (char == s[count]) {
      count++;
    }
  }
  return count == s.length;
};
let s = "ahbgdc";
let t = "abc";
console.log(isSubsequence(t, s));
