const groupPalindrome = (s) => {
  //Create an object to group them.
  let myObj = {};
  for (let w of s) {
    let pal = w.split("").reverse().join("");
    if (w === pal) {
      if (!myObj["Pal"]) {
        myObj["Pal"] = [w];
      } else {
        myObj["Pal"].push(w);
      }
    } else {
      myObj[w] = [w];
    }
  }
  return Object.values(myObj);
};
let input = ["level", "racecar", "hello", "deified", "world", "radar"];
console.log(groupPalindrome(input));
