/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    const digits = n.toString();

    let sum = 0;
    let sign = 1;

    for(const ch of digits){
        sum += sign * Number(ch);
        sign *= -1;
    }

    return sum;
};