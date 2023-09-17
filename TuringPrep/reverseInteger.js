/**  Rules/Limitations:
Negative numbers should remain negative.
ex. -12345 becomes -54321
Any leading zeroes should be removed.
ex. 321000 becomes 123 & not 000123
The function can accept floats or integers.
ex. 543.2100 becomes 12.345
The function will return integers as integers.
ex. 54321 becomes 12345 & not 12345.00
*/

const reversedNum = (num) => {
  // Covert num into a string, create an array out of it and reverse.
  let reversedNumStr = num.toString().split("").reverse().join("");
  //Get the sign of the original number.
  let sign = Math.sign(num);
  //Convert the reversed string into a floating number with the sign if the original number had it and preceeding zeros removed.
  let reversedNum = parseFloat(reversedNumStr) * sign;
  return reversedNum;
};
//Testing
console.log(reversedNum(-12345));
console.log(reversedNum(321000));
console.log(reversedNum(543.21));
