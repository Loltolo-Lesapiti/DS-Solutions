var maxArea = function (height) {
  //Bruteforce approach
  //   let maxArea = 0;
  //   let h = 0;
  //   let w = 0;
  //   for (let i = 0; i < height.length; i++) {
  //     for (let j = i; j < height.length; j++) {
  //       h = height[i];
  //       w = j - i;
  //       if (h > height[j]) {
  //         h = height[j];
  //       }
  //       maxArea = Math.max(maxArea, h * w);
  //     }
  //   }

  let maxArea = 0;
  let l = 0;
  let r = height.length - 1;
  while (l < r) {
    let w = r - l;
    let h = Math.min(height[l], height[r]);
    maxArea = Math.max(maxArea, w * h);
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
};
let height = [1, 7, 6, 2, 5, 4, 8, 3, 8];
console.log(maxArea(height));
