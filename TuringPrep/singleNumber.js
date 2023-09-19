//Finding the non duplicated number
var singleNumber = function (nums) {
  //Declare a set.
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
console.log(singleNumber([4, 1, 2, 1, 2]));
