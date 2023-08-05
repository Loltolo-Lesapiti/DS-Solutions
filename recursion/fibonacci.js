// This is a recursion implementation of fibonacci series.
function fibonacci(num) {
 if(num<=1){
    return num
 }else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
  }

for(let i=0; i<9; i++){
    console.log(fibonacci(i));
}
