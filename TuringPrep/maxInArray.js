//Find the maximum element in an array.
const maxElem = (nums) => {
  return nums.reduce((sum, intialVal) => {
    return Math.max(sum, intialVal);
  }, 0);
};
console.log(maxElem([1, 2, 3, 5, 6, 8]));
