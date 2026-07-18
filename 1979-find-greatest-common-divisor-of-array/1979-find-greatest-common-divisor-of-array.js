/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    function gcd(a,b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }


    return gcd(min,max);
};