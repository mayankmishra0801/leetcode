/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreater = new Map();

    for (const num of nums2) {
        while (
            stack.length > 0 &&
            stack[stack.length - 1] < num
        ) {
            const smaller = stack.pop();
            nextGreater.set(smaller, num);
        }

        stack.push(num);
    }

    return nums1.map(num => nextGreater.get(num) ?? -1);
};