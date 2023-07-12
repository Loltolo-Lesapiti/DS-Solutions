// This code remove vowels from a string.

const RemoveVowels=(name)=>{
    const strArr= name.split('');
    
    const consonants= strArr.filter((char)=>!(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"));

    return consonants.join('')
}

console.log(RemoveVowels('Lerisen'));
