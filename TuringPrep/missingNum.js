var missingNumber = function (nums) {
  //   let numsSet = new Set(nums);
  //   let missing = 0;
  //   for (let i = 1; i <= nums.length; i++) {
  //     if (!numsSet.has(i)) {
  //       missing = i;
  //       break;
  //     }
  //   }
  // return missing;
  //Better implementation that uses Gausian sum and the reduce function.
  let expectedSum = nums.length(nums.length + 1) / 2;
  let actualSum = nums.reduce((sum, num) => {
    return sum + num;
  }, 0);
  return expectedSum - actualSum;
};
console.log(missingNumber([3, 0, 1]));
