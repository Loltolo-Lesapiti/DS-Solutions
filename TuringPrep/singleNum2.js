var singleNumber = function (nums) {
  let numsSet = new Set();
  for (let num of nums) {
    if (numsSet.has(num)) {
      numsSet.delete(num);
    } else {
      numsSet.add(num);
    }
  }
  return numsSet.values().next().value;
};
console.log(singleNumber([2, 2, 3, 2]));
