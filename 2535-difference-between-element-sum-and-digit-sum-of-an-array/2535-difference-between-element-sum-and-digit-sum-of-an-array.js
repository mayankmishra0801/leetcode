/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for(const num of nums){
        elementSum += num;

        let value = num;

        while(value > 0){
            digitSum += value % 10;
            value = Math.floor(value/10);
        }
    }

    return Math.abs(elementSum - digitSum);
};