//Find the duplicates in an array.
var findDuplicate = function (nums) {
  let slow = nums[0];
  let fast = nums[nums[0]];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
console.log(findDuplicate([1, 3, 4, 2, 2]));
