/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {

     let totalTime = 0;


for(let i = 0;i< timeSeries.length - 1;i++){
    const gap = timeSeries[i+1] - timeSeries[i];
    totalTime += Math.min(gap,duration);
}
  

  return totalTime + duration;
   
};