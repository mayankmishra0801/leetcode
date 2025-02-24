/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
     function findLeft(nums,target){
        let left = 0, right = nums.length-1;
        let result = -1;
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                result = mid;
                right = mid-1;
            }else if(nums[mid] < target){
                left = mid+1;
            }else{
                right = mid-1;
            }
        }

        return result;
     }


     function findRight(nums,target){
        let left = 0,right = nums.length-1;
        let result = -1;
        while(left <= right){
            const mid = Math.floor((left+right)/2);
            if(nums[mid] === target){
                result = mid;
                left = mid+1;

            }else if(nums[mid] < target){
                left = mid+1;

            }else{
                right = mid -1;
            }
        }

        return result;
     }
    
    const left = findLeft(nums,target);
    if(left === -1){
        return [-1,-1]
    }
    const right = findRight(nums,target);
    return[left,right];


};