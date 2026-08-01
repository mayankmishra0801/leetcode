/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let ans = nums[0];

    for (const num of nums) {
        if (
            Math.abs(num) < Math.abs(ans) ||
            (Math.abs(num) === Math.abs(ans) && num > ans)
        ) {
            ans = num;
        }
    }

    return ans;
};