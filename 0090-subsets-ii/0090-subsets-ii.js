/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    
  let res = [];
  nums.sort((a,b)=>a-b);

  function subsets(index,curr){
    // base case
    if(index === nums.length){
        res.push([...curr]);
        return;
    }
    // recursive include
    curr.push(nums[index]);
    subsets(index+1,curr);
    curr.pop(); // backtracking

    //exclude
    while(index<nums.length-1 && nums[index] === nums[index+1]){
        index++;
    }

    //index = 3
    subsets(index+1,curr);
    

  }



   subsets(0,[]);
   return res;





};