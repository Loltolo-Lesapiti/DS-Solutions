const frequency=(str)=>{
    let myObj={};
    for(let char of str){
        myObj[char]=myObj[char]+1 || 1
    }
    console.log(myObj);
}
frequency('hello');