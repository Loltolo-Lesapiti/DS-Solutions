//This challenge returns items not shared by the given arrays.
const diffArray = (arr1, arr2) => {
  //Use filter method which returns an array of the specified condition.
  return [
    ...arr1.filter((e) => !arr2.includes(e)),
    ...arr2.filter((e) => !arr1.includes(e)),
  ];
};
console.log(diffArray([1, 2, 3, 5], [1, 3, 4, 5]));
