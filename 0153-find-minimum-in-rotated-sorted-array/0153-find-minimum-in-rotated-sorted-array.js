/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length -1;

    while(l < r){
        let mid =  Math.floor((r+l)/2);

        if(nums[mid] > nums[r]){
            l = mid + 1;

        }else{
             r = mid;
        }
    }

    return nums[l];
    
};