const balancedStringSplit = (s)=> {
    const newArr= s.split('RL').join('*');
    let sum=0;
    for(let i=0; i<newArr.length; i++){
        if(newArr[i]==='*'){
            sum+=1;
        }
    }
    return sum;
    
};
console.log(balancedStringSplit("RLRRRLLRLL"));