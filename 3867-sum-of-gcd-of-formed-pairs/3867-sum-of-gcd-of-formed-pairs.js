/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const prefixGcd = [];

    let maxSoFar = 0;


    const gcd = (a,b) => {
        while(b !== 0){
            const remainder = a % b;
            a = b;
            b = remainder;
        }

        return a;
    };

    for(let i = 0;i < nums.length;i++){
        maxSoFar = Math.max(maxSoFar,nums[i]);
        prefixGcd.push(gcd(nums[i],maxSoFar));
    }

    prefixGcd.sort((a,b)=> a-b);

    let left = 0;
    let right = prefixGcd.length - 1;

    let sum = 0;


    while(left < right){
        sum += gcd(prefixGcd[left], prefixGcd[right]);
        left++;
        right--;
    }

    return sum;
};