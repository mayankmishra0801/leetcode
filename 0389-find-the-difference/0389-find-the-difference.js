/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let xor = 0;

    for(let ch of s){
        xor ^= ch.charCodeAt(0);
    }

    for(let ch of t){
        xor ^= ch.charCodeAt(0);
    }

    return String.fromCharCode(xor);
};