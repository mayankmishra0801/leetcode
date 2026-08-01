/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    
    const freq = new Map();

    for(const num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    let sum = 0;

    for(const [num,count] of freq){
         if(count === 1){
            sum += num;
         }
    }


    return sum;
};