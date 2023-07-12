const singleNumber = (nums)=> {
// We iterate through the array and perform bitwise XOR operation.
let result =0;
for(let num of nums){
    result ^=num;
}
return result;
};

console.log(singleNumber([2,2,3,2]));