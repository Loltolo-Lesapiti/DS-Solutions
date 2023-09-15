const maxSubArray = (nums) => {
  let maxSum = 0;
  let partialMaxSum = 0;
  for (let num of nums) {
    partialMaxSum += num;
    maxSum = Math.max(partialMaxSum, maxSum);
    if (partialMaxSum < 0) {
      partialMaxSum = 0;
    }
  }
  return maxSum;
};

//Testing.
console.log(maxSubArray([-1, 2, 3, -9])); // 5
console.log(maxSubArray([-1, 2, 3, -9, 11])); // 11
console.log(maxSubArray([-2, -1, 1, 2])); // 3
console.log(maxSubArray([100, -9, 2, -3, 5])); // 100
console.log(maxSubArray([1, 2, 3])); // 6
console.log(maxSubArray([-1, -2, -3])); // 0
