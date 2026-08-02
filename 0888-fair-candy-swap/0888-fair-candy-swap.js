/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {

    

   const aliceSum = aliceSizes.reduce((sum, val) => sum + val, 0);
    const bobSum = bobSizes.reduce((sum, val) => sum + val, 0);

    const diff = (aliceSum - bobSum) / 2;

    const bobSet = new Set(bobSizes);

    for(const aliceCandy of aliceSizes){
        const bobCandy = aliceCandy - diff;

        if(bobSet.has(bobCandy)){
            return [aliceCandy,bobCandy];
        }
    }
};