var missingNumber = function (nums) {
  let numsSet = new Set(nums);
  let missing = 0;
  for (let i = 1; i <= nums.length; i++) {
    if (!numsSet.has(i)) {
      missing = i;
      break;
    }
  }
  return missing;
};
console.log(missingNumber([3, 0, 1]));
