/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

     let validElementIndex = 0;
  
    for (const currentElement of nums) {
        if (currentElement !== val) {
            nums[validElementIndex] = currentElement;
            validElementIndex++;
        }
    }
  
    return validElementIndex;
    
};