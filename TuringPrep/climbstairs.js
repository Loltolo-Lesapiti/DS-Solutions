var climbStairs = function (n) {
  if (n < 0) {
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
};

console.log(climbStairs(3));
