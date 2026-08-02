/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let previousGroup = 0;
    let currentGroup = 1;

    let count = 0;


    for(let i = 1;i<s.length;i++){
        if(s[i] === s[i-1]){
            currentGroup++;
        }
        else{
            count += Math.min(previousGroup,currentGroup);

            previousGroup = currentGroup;
            currentGroup = 1;
        }
    }


    return count+ Math.min(previousGroup,currentGroup);
};