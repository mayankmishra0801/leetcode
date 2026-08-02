/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let jewelSet = new Set(jewels);

    let count = 0;

    for(let stone of stones){
        if(jewelSet.has(stone)){
            count++;
        }
    }


    return count;
};