/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = 0;

    let odd = 1;

    while(even < nums.length && odd < nums.length){
        if(nums[even] % 2 === 0){
            even += 2;

        }else if(nums[odd] % 2 === 1){
            odd += 2;
        }else{
            [nums[even],nums[odd]] = [nums[odd],nums[even]];

            even += 2;
            odd += 2;
        }
    }

    return nums;
};