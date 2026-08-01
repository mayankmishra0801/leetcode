/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const result = [];


    for(const word of words){
        const index = Number(word[word.length - 1]) -1;

        result[index] = word.slice(0,-1);
    }


    return result.join(" ");
};