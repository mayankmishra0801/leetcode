/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
var isPrefixString = function(s, words) {
    let current = "";

    for(const word of words){
        current += word;

        if(current === s){
            return true;
        }

        if(!s.startsWith(current)){
            return false;
        }
    }


    return false;
};