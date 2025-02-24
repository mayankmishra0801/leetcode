/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
       let res = [];
       let n = nums.length;
       function helper(i){
        if(i === n-1){
            res.push([...nums]);
            return;
        }
        for(let j = i;j<n;j++){
            [nums[i],nums[j]] = [nums[j],nums[i]];
            helper(i+1);
            //backtracking
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
       }
       helper(0);
       return res;

};