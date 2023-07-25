//Grouping palindrome together.
// Input: ["level", "racecar", "hello", "deified", "world", "radar"]
// Output: [["level"], ["racecar", "radar"], ["deified"], ["hello"], ["world"]]

const palindrome=(words)=>{
    //Declare an object.
    let myObject={};
    for(let word of words){
        let wordsRev=word.split('').reverse().join('');
        if(!myObject[wordsRev]){
            myObject[wordsRev]=[word]
        }else{
            myObject[wordsRev].push(word)
        }
    }
    return Object.values(myObject)
}

console.log(palindrome(["level", "racecar", "hello", "deified", "world", "radar"]))