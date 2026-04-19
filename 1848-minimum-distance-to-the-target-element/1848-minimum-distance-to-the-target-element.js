/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
      let n = nums.length;
    let result = Infinity;

    for (let i = 0; i < n && result > Math.abs(i - start); i++) {
        if (nums[i] === target) {
            result = Math.min(result, Math.abs(i - start));
        }
    }

    return result;
    
};