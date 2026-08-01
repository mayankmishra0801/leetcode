/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const doubled = s + s;
    return doubled.slice(1,-1).includes(s);
};