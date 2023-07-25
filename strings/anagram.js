// Solving anagram challenge.
const anagram=(words)=>{
    //Declare an object.
    let myObj={};
    for(let word of words){
        wordArr=word.split('').sort().join();
        if(!myObj[wordArr]){
            myObj[wordArr]=[word]
        }else{
            myObj[wordArr].push(word);
        }
    }
    return Object.values(myObj)
}
let input= ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(anagram(input));