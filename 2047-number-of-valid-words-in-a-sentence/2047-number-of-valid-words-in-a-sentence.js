/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    const tokens = sentence.trim().split(/\s+/);

    const pattern = /^[a-z]*([a-z]-[a-z])?[a-z]*[!.,]?$/;


    let count = 0;


    for(const token of tokens){
        if(pattern.test(token)){
            count++;
        }
    }


    return count;
};