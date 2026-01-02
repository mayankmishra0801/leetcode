/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
        const seenElements = new Set();
  
    for (const currentElement of nums) {
        if (seenElements.has(currentElement)) {
            return currentElement;
        }
        seenElements.add(currentElement);
    }
  

    return -1;
};