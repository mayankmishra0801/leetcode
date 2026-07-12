/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = nums[0];
    let minProduct = nums[0];

    let result = nums[0];

    for(let i = 1;i<nums.length;i++){
        let num = nums[i];

        let tempMax = maxProduct;

        maxProduct = Math.max(num, num*maxProduct,num*minProduct);


        minProduct = Math.min(num,num*tempMax,num*minProduct);

        result = Math.max(result,maxProduct);
    }

    return result;
};