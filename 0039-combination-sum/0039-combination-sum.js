/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
     let res = [];
     function combinationSumRecusive(index,curr,currSum){
        if(currSum > target){
            return;
        }
        if(currSum === target){
            res.push([...curr]);
            return;
        }
        for(let j = index;j<candidates.length;j++){
            curr.push(candidates[j]);
            combinationSumRecusive(j,curr,currSum+candidates[j]);
            curr.pop();
        }
     }
     combinationSumRecusive(0,[],0);
     return res;
};