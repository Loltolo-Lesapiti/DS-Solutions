const shuffleString=(s, indice)=>{
    let result=[];
    for (let i=0; i<indice.length; i++){
        result[indice[i]]=s[i];
    }
    return result.join('');
}
const shuffledString = "codeleet";
const shuffledIndices = [4,5,6,7,0,2,1,3];
console.log(shuffleString(shuffledString,shuffledIndices));