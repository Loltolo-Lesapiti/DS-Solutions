var twoSum = function (numbers, target) {
  //This is a brutforce operation with a time complexity of O(N^2). We won't use this, we shall use a map instead.
  //   let result = 0;
  //   let indices = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     for (let j = i + 1; j < numbers.length; j++) {
  //       result = numbers[i] + numbers[j];
  //       if (result == target) {
  //         indices = [i, j];
  //       }
  //     }
  //   }
  //   return indices;

  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let result = target - numbers[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(numbers[i], i);
  }
  return [];
};
let numbers = [2, 7, 11, 15];
let target = 26;

console.log(twoSum(numbers, target));
