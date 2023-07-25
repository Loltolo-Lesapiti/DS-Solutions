// Given an array of strings, group the words together based on their lengths.
// Example:
// Input: ["apple", "banana", "grape", "orange", "pear", "kiwi"]
// Output: [[apple], [grape, pear, kiwi], [banana, orange]]

const groupWords=(words)=>{
    let myObject={}
    for(let word of words){
         let len=word.length;
         if(!myObject[len]){
            myObject[len]=[word]
         }else{
            myObject[len].push(word);
         }
    }
    return Object.values(myObject);
}
let words=["apple", "banana", "grape", "orange", "pear", "kiwi"];
console.log(groupWords(words));