var canJump = function (nums) {
  if (nums.lengh <= 1) {
    return true;
  }
  let jump = 0;
  for (let i = 0; i < nums.length; i++) {
    jump = Math.max(jump, i + nums[i]);
    if (jump >= nums.length - 1) {
      return true;
    }
    if (jump <= i && nums[i] === 0) {
      return false;
    }
  }
  return false;
};
let nums = [2, 3, 1, 1, 4];
console.log(canJump(nums));
