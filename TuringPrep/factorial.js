//Claculating a factorial of a number.
const factorial = (num) => {
  //Base case.
  if (num < 0) {
    return -1;
  }
  if (num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
};
console.log(factorial(5));
