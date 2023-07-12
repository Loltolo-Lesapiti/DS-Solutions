/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length==0){
        return ''
    }else if(strs.length==1){
        return strs[0];
    }else{
        //Sort the array and compare the last and the first strings.
        let sortedArray= strs.sort();
        let pref="";
        for(let i=0; i<sortedArray[0].length; i++){
            if(sortedArray[0][i]===sortedArray[strs.length-1][i]){
                pref=pref+ sortedArray[0][i];
            }else{
                break
            }
        }
        return pref;
    }
};

console.log(longestCommonPrefix(["dog","racecar","car"]));