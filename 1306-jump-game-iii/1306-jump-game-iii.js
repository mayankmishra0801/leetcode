/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    
     let n = arr.length;
     function dfs(i){
        if(i <0 || i>=n || arr[i] < 0){
            return false;
        }

        if(arr[i] === 0){
            return true;
        }

        arr[i] *= -1;

        let left = dfs(i - arr[i]);
        let  right = dfs(i + arr[i]);

        return left || right;


     }

     return dfs(start);
};