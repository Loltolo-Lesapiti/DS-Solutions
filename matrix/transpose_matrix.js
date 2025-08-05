var transpose = function (matrix) {
  //The line below, create a new matrix and fill with 0
  new_matrix = Array.from({ length: matrix[0].length }, () =>
    new Array(matrix.length).fill(0)
  );
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      new_matrix[i][j] = matrix[j][i];
    }
  }
  return new_matrix;
};
