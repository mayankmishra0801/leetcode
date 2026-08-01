/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let original = num;

    let count = 0;

    while(num > 0){
        let digit = num % 10;

        if(original % digit === 0){
            count++;
        }

        num = Math.floor(num/10);
    }

    return count;
};