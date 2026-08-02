/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    let steps = 0;

    for(let divisor = 2;divisor <=n;divisor++){
        while(n % divisor === 0){
            steps += divisor;
            n /= divisor;
        }
    }


    return steps;
};