const removeDuplicates = (nums) => {
  const newSet = new Set(nums);

  const newArray = [...newSet];

  for (let i = 0; i < newArray.length; i++) {
    nums[i] = newArray[i];
  }

  return nums;
};
let nums = [1, 1, 2];
console.log(removeDuplicates(nums));
