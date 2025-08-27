const median = (a1, a2) => {
  const mainArr = [...a1, ...a2];
  const sortedArr = mainArr.sort();
  const size = sortedArr.length;
  let median = 0;
  if (size % 2 == 0) {
    median = (sortedArr[size / 2 - 1] + sortedArr[size / 2 + 1]) / 2;
  } else {
    median = sortedArr[size / 2 - 1];
  }

  return median;
};
console.log(median([1, 2], [3]));
console.log(median([1, 2, 3, 5], [1, 3, 4, 5]));
