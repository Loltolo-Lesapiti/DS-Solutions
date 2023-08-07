const sum=(arr)=>{
    if(arr.length){
        return arr[arr.length-1]+ sum(arr.slice(0,arr.length-1));
    }else{
        return 0;
    }
}
console.log(sum([3,5]))