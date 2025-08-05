const isToeplitzMatrix = (matrix) => {
  if (!matrix || matrix.length <= 1) {
    return true;
  }
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};
let input1 = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
let input2 = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2],
];
let input3 = [
  [1, 2],
  [2, 2],
];
console.log(isToeplitzMatrix(input1));
console.log(isToeplitzMatrix(input2));
console.log(isToeplitzMatrix(input3));
