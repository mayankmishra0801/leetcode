/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let start = 0;
    let end = nums.length -1;
    
    while(start <= end){
        const middle = Math.floor((start+end)/2);
        if(nums[middle] < nums[middle+1]){
            start = middle +1;
        }else{
            end = middle -1
        }
    }
    
    return start;
    // tc logn
    // sc o(1)
};