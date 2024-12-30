var rotate = function (nums, k) {
  k = k % nums.length;
  let rotatedArray = nums.splice(nums.length - k);
  nums.unshift(...rotatedArray);
  return nums;
};

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3));
