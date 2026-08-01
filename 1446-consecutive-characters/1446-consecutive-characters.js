/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    
    let current = 1;
    let maxLength = 1;

    for(let i = 1;i<s.length;i++){
        if(s[i] === s[i-1]){
            current++;
        }else{
            current = 1;
        }

        maxLength = Math.max(maxLength,current);
    }

    return maxLength;
};