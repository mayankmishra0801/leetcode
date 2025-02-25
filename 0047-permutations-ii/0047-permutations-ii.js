/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
     var res = [];
     var permutations = function(index){
        if(index === nums.length-1){
            res.push([...nums]);
            return;
        }
        var hash = {}
        for(var j = index;j<nums.length;j++){
            if(!hash[nums[j]]){
                hash[nums[j]] = 1;
                [nums[index],nums[j]] = [nums[j],nums[index]];
                permutations(index+1);
                [nums[index],nums[j]] = [nums[j],nums[index]];
            }
        }
     }
     permutations(0);
     return res;
};