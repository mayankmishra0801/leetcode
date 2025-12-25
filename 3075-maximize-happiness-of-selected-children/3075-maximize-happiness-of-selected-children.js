/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a);
  
    // Initialize the total happiness sum
    let totalHappinessSum = 0;
  
    // Select the top k people with highest happiness values
    for (let i = 0; i < k; ++i) {
        
        const adjustedHappiness = happiness[i] - i;
      
 
        totalHappinessSum += Math.max(adjustedHappiness, 0);
    }
  
    return totalHappinessSum;
};