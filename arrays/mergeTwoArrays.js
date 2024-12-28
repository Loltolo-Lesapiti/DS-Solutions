/** Leet code challenge for merging two sorted arrays */

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1; // Pointer for nums1
  let p2 = n - 1; // Pointer for nums2

  for (let p = m + n - 1; p >= 0; p--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
  }
  return nums1;
};
let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

console.log(merge(nums1, m, nums2, n));
