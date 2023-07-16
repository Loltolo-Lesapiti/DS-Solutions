// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

const sum=(nums, target)=>{
    //Decalare an empty object. 
    const numsObject={};
    for(let i=0; i<nums.length; i++){
        let result= target-nums[i];
        //Check if the result is in the object. 
        if(result in numsObject){
            return [numsObject[result], i]
        }
    //Add items in the array to the hashmap;
        numsObject[nums[i]]=i
    }
    return [];
}
let nums = [2,7,11,15], target = 9

console.log(sum(nums, target));