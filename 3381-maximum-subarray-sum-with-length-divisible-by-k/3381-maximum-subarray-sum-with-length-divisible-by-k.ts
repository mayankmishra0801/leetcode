function maxSubarraySum(nums: number[], k: number): number {
     const minPrefixSum: number[] = Array(k).fill(Infinity);
  

    minPrefixSum[k - 1] = 0;
  

    let maxSum: number = -Infinity;
  
 
    let prefixSum: number = 0;
  
 
    for (let i = 0; i < nums.length; ++i) {

        prefixSum += nums[i];

        maxSum = Math.max(maxSum, prefixSum - minPrefixSum[i % k]);
      
  
        minPrefixSum[i % k] = Math.min(minPrefixSum[i % k], prefixSum);
    }
  
    return maxSum;
};