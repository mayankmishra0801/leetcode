/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    


    let result = [];

    for(const word of words){
        let parts = word.split(separator);

        for(const part of parts){
            if(part !== ""){
                result.push(part);
            }
        }
    }

    return result;
};