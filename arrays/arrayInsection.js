const interSection=(arr1, arr2)=>{
    //Create the sets out of the arrays to avoid duplicates.
    const arr1Set=new Set(arr1);
    const arr2Set=new Set(arr2);
    const common=[];
    
    for(elem of arr1Set){
        if(arr2Set.has(elem)){
            common.push(elem);
        }
    }
    return common;
    }
    
    console.log(interSection([1, 2, 3, 4, 5],[2, 3, 5, 6, 7]))