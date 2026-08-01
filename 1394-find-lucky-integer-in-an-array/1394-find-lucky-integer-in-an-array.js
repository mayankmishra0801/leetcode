/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = Array(501).fill(0);

    for(const num of arr){
        freq[num]++;
    }

    for(let i = 500;i >=1;i--){
        if(freq[i] === i){
            return i;
        }
    }

    return -1;
};