// Given an array of strings, group the words together based on a common prefix or suffix. You can define the prefix or suffix length as per the requirement.
// Example:
// Input: ["unlock", "unlike", "unseen", "outdoor", "outline", "output"]
// Output: [[unlock, unlike, unseen], [outdoor, outline, output]]

const groupPrefix=(words)=>{
    let myObject={};
    for(let word of words){
        let prefix=word.substring(0,1);
        if(!myObject[prefix]){
            myObject[prefix]=[word];
        }else{
            myObject[prefix].push(word);
        }
    }
    return Object.values(myObject);
}
let words=["unlock", "unlike", "unseen", "outdoor", "outline", "output"];
console.log(groupPrefix(words))