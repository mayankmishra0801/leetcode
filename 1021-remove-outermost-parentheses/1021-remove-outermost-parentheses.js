/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    let result = "";


    for(let ch of s){
        if(ch === "("){
            if (depth > 0){
                result += ch;
            }

            depth++;
        }else{
            depth--;
            if(depth > 0){
                result += ch;
            }
        }
    }

    return result;
};