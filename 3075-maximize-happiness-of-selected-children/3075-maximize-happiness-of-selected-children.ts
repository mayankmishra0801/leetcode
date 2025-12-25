function maximumHappinessSum(happiness: number[], k: number): number {
      happiness.sort((a: number, b: number) => b - a);
  
    // Initialize the total happiness sum
    let totalHappinessSum: number = 0;
  
    // Select the top k people with highest happiness values
    for (let i: number = 0; i < k; ++i) {
        
        const adjustedHappiness: number = happiness[i] - i;
      
 
        totalHappinessSum += Math.max(adjustedHappiness, 0);
    }
     return totalHappinessSum;
};