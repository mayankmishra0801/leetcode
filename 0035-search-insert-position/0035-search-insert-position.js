/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left= 0,right = nums.length-1;
    ;
    if(target<nums[left]) return 0;
    if(target>nums[right]) return nums.length;
    
    while(left <= right){
        let mid = (left+right)>>1;
        if(target==nums[mid]) return mid;
        else if(target<nums[mid]) right = mid-1;
        else left = mid+1;
        
    }
    
    return left;
};