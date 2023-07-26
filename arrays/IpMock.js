// [1, 2, 3, 5]
// [1, 3, 4, 5]
// diffArray([1, 2, 3, 5], [1, 3, 4, 5])
// [2,4]

function missing(arr1, arr2){
    // usee filter to return arr1
   let test1 = arr1.filter((e)=> !arr2.includes(e))
//    return test1
   // usee filter to return arr2
   let test2 = arr2.filter((e)=> !arr1.includes(e))
//    return test2
    // join the two arrays into one
    let myarray= [...test1, ...test2]
    // myarray.push(...test1, ...test2)
    return myarray

}
console.log(missing([1, 2, 3, 5], [1, 3, 4, 5]))