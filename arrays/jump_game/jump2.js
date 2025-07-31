var jump = function (nums) {
  let jump = 0;
  let currentVal = 0;
  let nextVal = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextVal = Math.max(nextVal, i + nums[i]);

    if (i === currentVal) {
      jump++;
      currentVal = nextVal;
    }

    if (currentVal >= nums.length - 1) break;
  }
  return jump;
};
let nums = [7, 0, 9, 6, 9, 6, 1, 7, 9, 0, 1, 2, 9, 0, 3];
console.log(jump(nums));
