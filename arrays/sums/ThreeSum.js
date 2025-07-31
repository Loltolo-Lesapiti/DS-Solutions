const ThreeSum = (nums) => {
  let sortedArr = nums.sort((a, b) => a - b);
  let output = [];

  for (let i = 0; i < sortedArr.length - 2; i++) {
    if (sortedArr[i] > 0) break;
    if (i > 0 && sortedArr[i] === sortedArr[i - 1]) continue;
    let left = i + 1;
    let right = sortedArr.length - 1;

    while (left < right) {
      let sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum === 0) {
        output.push([sortedArr[i], sortedArr[left], sortedArr[right]]);

        while (left < right && sortedArr[left] === sortedArr[left + 1]) {
          left++;
        }

        while (left < right && sortedArr[right] === sortedArr[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return output;
};
let numbers = [-1, 0, 1, 2, -1, -4];

console.log(ThreeSum(numbers));
