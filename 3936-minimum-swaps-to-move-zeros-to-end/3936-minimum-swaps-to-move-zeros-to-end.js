/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumSwaps = function(nums) {
     let left = 0;
    let right = nums.length - 1;
    let swaps = 0;

    while (left < right) {

        // left should stop at a misplaced 0
        while (left < right && nums[left] !== 0) {
            left++;
        }

        // right should stop at a misplaced non-zero
        while (left < right && nums[right] === 0) {
            right--;
        }

        if (left < right) {
            swaps++;
            left++;
            right--;
        }
    }

    return swaps;
};