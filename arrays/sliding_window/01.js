var minSubArrayLen = function (target, nums) {
  let left = 0;
  let sum = 0;
  let minLen = Infinity;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen == Infinity ? 0 : minLen;
};
let target = 7;
let nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums));
