/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    function helper(start,curr){
        if(curr.length === k){
            res.push([...curr]);
            return;
        }
        //recursive case
        for(let j = start;j<=n;j++){
            curr.push(j);
            helper(j+1,curr);
            curr.pop();
        }
    }
    helper(1,[]);
    return res;
};