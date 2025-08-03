// Input: ["apple", "banana", "grape", "orange", "pear", "kiwi"]
// Output: [[apple], [grape, pear, kiwi], [banana, orange]]
const group_Words = (s) => {
  //Create an object.
  let myObj = {};
  for (let w of s) {
    let size = w.length;
    if (!myObj[size]) {
      myObj[size] = [w];
    } else {
      myObj[size].push(w);
    }
  }
  return Object.values(myObj);
};
let input = ["apple", "banana", "grape", "orange", "pear", "kiwi"];
console.log(group_Words(input));
