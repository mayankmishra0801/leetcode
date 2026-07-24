/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    
    nums.sort((a,b) => b - a);

    for(let i = 0; i< nums.length - 2;i++){
        const a = nums[i];
        const b = nums[i+1];
        const c = nums[i+2];

        if(b + c > a){
            return a+b+c;
        }
    }

    return 0;
};