const numJewelsInStones = (jewels, stones) => {
    const jewelsArr= new Set (jewels.split(''));
    let count=0;
    
    for(let i=0; i<stones.length; i++){
            if(jewelsArr.has(stones[i])){
                count +=1;
            }
    }
    return count;
    
};

console.log(numJewelsInStones("aA","aAAbbbb"));

