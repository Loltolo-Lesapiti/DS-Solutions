const isPalindrome = (num)=>{
    //convert the num into a string
    const numString=num.toString()
    //Reverse the string
    const reverseString= numString.split('').reverse().join('');

    return numString===reverseString

}
console.log(isPalindrome([121]));