/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let output = [];
    let ordered = [...arr].sort((a,b)=>a-b);
    let map = {};
    let rank = 1;
    for(let i = 0;i< ordered.length;i++){
        if(!map[ordered[i]]){
            map[ordered[i]] = rank++;
        }
    }
    
    for(let i = 0;i<arr.length;i++){
        output.push(map[arr[i]]);
    }
    return output;
};