/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    function getReverse(num){
        let result = 0;

        while(num > 0){
            let lastDigit = num %10;

            result = result * 10 + lastDigit;

            num = Math.floor(num/10);
        }

        return result;
    }

    return Math.abs(n - getReverse(n));
};