/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const answer = [];

    for(const num of nums){
        const digits = num.toString();

        for(const digit of digits){
            answer.push(Number(digit));
        }
    }

    return answer;
};