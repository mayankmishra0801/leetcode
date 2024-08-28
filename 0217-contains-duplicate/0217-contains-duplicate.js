/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let s   =  new Set([...nums]);
    return s.size !== nums.length;
};