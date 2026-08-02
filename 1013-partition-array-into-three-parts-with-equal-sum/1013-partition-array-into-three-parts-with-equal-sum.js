/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const total = arr.reduce((sum,num)=> sum+num,0);


    if(total % 3 !== 0) return false;


    const target = total / 3;
    let currentSum = 0;
    let parts = 0;

    for(const num of arr){
        currentSum += num;
        if(currentSum === target){
            parts++;
            currentSum = 0;
        }
    }

    return parts >= 3;
};