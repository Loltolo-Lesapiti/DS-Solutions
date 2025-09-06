// Classic DFS flood fill.
// Start from (sr, sc), record the original color.
// Recolor the pixel and recursively visit its 4 neighbors
// if they share the original color and are in bounds.
// Stops automatically when hitting different colors or edges.
// Time: O(m*n), Space: O(m*n) worst case due to recursion stack.

var floodFill = function (image, sr, sc, color) {
  const old = image[sr][sc];
  if (old === color) return image;
  const m = image.length,
    n = image[0].length;

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== old) return;
    image[i][j] = color;
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  dfs(sr, sc);
  return image;
};
let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
];
console.log(floodFill(image, 1, 1, 2));
