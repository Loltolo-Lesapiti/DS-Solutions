
const balanceBrackets=(expr)=>
{
    const stack=[];
    for(let par of expr){
        if(par==="("||par==="{"||par==="["){
            stack.push(par);
            continue
        }
        if (stack.length==0){
            return false;
        }
        let check;
    }
     
    return stack.length==0;
}

console.log(balanceBrackets("({[]}}]"));