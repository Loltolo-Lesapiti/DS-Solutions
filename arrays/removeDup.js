
const removeDuplicates = (nums)=> {
    const newSet= new Set(nums);
    
    const newArray= [...newSet];

    for(let i=0; i<newArray.length; i++){
        nums[i]= newArray[i];
    }

    for(let i=newArray.length; i<nums.length; i++){
        nums[i]="_"
    }
    
    return nums;
    
};
let nums=[1,1,2];
console.log(removeDuplicates(nums));