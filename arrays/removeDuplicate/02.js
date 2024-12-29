/** This leetcode solution removes duplicates but leaves two as shown
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
 * It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicates = function (nums) {
  if (nums.length <= 2) {
    return nums.length;
  }

  let slow = 2;
  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[slow - 2] != nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return nums.slice(0, slow);
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
