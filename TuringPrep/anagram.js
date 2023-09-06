const anagram=(s1,s2)=>{
    if(s1.length!=s2.length){
        return false;
    }else{
        return s1.split('').sort().join('')===s2.split('').sort().join('');
    }
}
let s1="race";
let s2="care";
console.log(anagram(s1,s2));