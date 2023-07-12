const mostWordsFound =(sentences)=>{
    return sentences.reduce((maxWords, sentence) => {
        const words = sentence.split(' ');
        return Math.max(maxWords, words.length);
    }, 0);
    
};

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]));