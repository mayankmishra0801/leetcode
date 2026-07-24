/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const result = [];

    for(let num = left; num <= right;num++){
        let temp = num;

        let isSelfDividing = true;

        while(temp > 0){
            const digit = temp % 10;

            if(digit === 0 || num % digit !== 0){
                isSelfDividing = false;
                break;
            }

            temp = Math.floor(temp/10);
        }

        if(isSelfDividing){
            result.push(num);
        }
    }

    return result;
};