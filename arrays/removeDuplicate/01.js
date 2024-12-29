/**
 * This leet code challenge removes the duplicates leaving only unique numbers.
 * In this case, I found set easier to use as it only takes unique elements.
 */

const removeDuplicates = (nums) => {
  if (nums.length == 0) {
    return 0;
  }
  let newSet = new Set(nums);
  let newArray = [...newSet];

  for (let i = 0; i < nums.length; i++) {
    nums[i] = newArray[i];
  }

  return nums;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
