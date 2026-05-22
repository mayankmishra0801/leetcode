/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var findPivot = function(nums, n) {

    let l = 0;
    let r = n - 1;

    while (l < r) {

        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] > nums[r]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    return r;
};

var binarySearch = function(l, r, nums, target) {

    let idx = -1;

    while (l <= r) {

        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] === target) {
            idx = mid;
            break;
        }
        else if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }

    return idx;
};

var search = function(nums, target) {

    let n = nums.length;

    let pivot_index = findPivot(nums, n);

    let idx = binarySearch(0, pivot_index - 1, nums, target);

    if (idx !== -1) {
        return idx;
    }

    idx = binarySearch(pivot_index, n - 1, nums, target);

    return idx;
};