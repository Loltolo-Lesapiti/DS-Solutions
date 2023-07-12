const calPoints =(operations)=>{
    let stack=[];
    
    for(let num of operations){
        if(num==='+'){
            let lastTwo= stack.splice(stack.length-2);
            stack.push(lastTwo[0] + lastTwo[1]);
        }else if(num==='C'){
            stack.pop();
        }else if(num==='D'){
            stack.push(stack[stack.length-1]*2)
        }else{
            stack.push(parseInt(num));
        }
    }
    
    return stack.reduce((sum, current)=>{
        return sum+current;
    },0)
     
};

console.log(calPoints(["5","2","C","D","+"]))