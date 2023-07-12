const defangIPaddr = (address) =>{
    const addressArr= address.split('');
    for(let i=0; i<addressArr.length; i++){
        if(addressArr[i]==="."){
            addressArr[i]="[.]";
        }
    }
    return addressArr.join('');
    
};

console.log(defangIPaddr("1.1.1.1"));