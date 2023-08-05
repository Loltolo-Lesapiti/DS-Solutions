const reverseString=(str)=>{
    if(str.length){
        return str[str.length-1] + reverseString(str.slice(0,str.length-1));
    }else{
        return '';
    }
}
console.log(reverseString('Hello'));