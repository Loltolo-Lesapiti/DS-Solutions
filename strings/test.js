const ThreeSum = (nums) => {
  //Sort the array in ascending order.
  let sortedArr = nums.sort((a, b) => a - b);
  let map = new Map();
  let result = []; // Create an array to store all triplets

  // First, populate the map
  for (let i = 0; i < sortedArr.length; i++) {
    map.set(sortedArr[i], i);
  }

  for (let i = 0; i < sortedArr.length; i++) {
    //Finding the first value.
    if (i > 0 && sortedArr[i] == sortedArr[i - 1]) continue;

    for (let j = i + 1; j < sortedArr.length; j++) {
      if (j > i + 1 && sortedArr[j] == sortedArr[j - 1]) continue;

      let target = 0 - (sortedArr[i] + sortedArr[j]);
      if (map.has(target) && map.get(target) > j) {
        result.push([sortedArr[i], sortedArr[j], target]);
      }
    }
  }

  return result;
};

let numbers = [-1, 0, 1, 2, -1, -4];
console.log(ThreeSum(numbers));
