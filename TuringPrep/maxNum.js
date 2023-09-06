const maxNum=(list)=>{
    let max=0;
    for(let i=0; i<list.length; i++){
        if(max<=list[i]){
            max=list[i];
        }
    }
    return max;
}

console.log(maxNum([1, 2, -8, 0,9]))