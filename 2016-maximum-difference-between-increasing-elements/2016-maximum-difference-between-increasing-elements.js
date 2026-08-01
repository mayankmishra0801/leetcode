/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minValue = nums[0];
    let maxDifference = -1;

    for(let i = 1;i<nums.length;i++){
        if(nums[i] > minValue){
            maxDifference = Math.max(maxDifference, nums[i]  - minValue);
        }else{
            minValue = nums[i];
        }
    }

    return maxDifference;
};