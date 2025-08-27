const median = (arr1, arr2) => {
  // Join the two arrays.
  let joinArr = arr1[0] < arr2[0] ? [...arr1, ...arr2] : [...arr2, ...arr1];
  // Check the length of the two arrays.
  let mainlen = joinArr.length;

  // If mainlen is odd, then you take the median of that else, you take the avarage of the two numbers.
  let middleIndex = Math.floor(mainlen / 2);
  let middleValue =
    mainlen % 2 == 0
      ? (joinArr[middleIndex - 1] + joinArr[middleIndex]) / 2
      : joinArr[middleIndex];

  return middleValue;
};
console.log(median([1, 2], [3]));
