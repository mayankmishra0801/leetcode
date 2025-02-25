/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort((a,b)=>a-b);
    function backtrack(index,currSum,curr){
        if(currSum === target){
         res.push([...curr]);
        return;
        }
           if(currSum > target || index > candidates.length-1){
        return;
    }
    let hash = {};
    for(let j = index;j<candidates.length;j++){
        if(!hash[candidates[j]]){
            hash[candidates[j]] = true;
            curr.push(candidates[j]);
            backtrack(j+1,currSum+candidates[j],curr);
            curr.pop();
        }
    }

   
       
    }
     backtrack(0,0,[]);
    return res;
 
};