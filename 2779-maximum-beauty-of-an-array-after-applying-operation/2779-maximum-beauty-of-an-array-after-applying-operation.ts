function maximumBeauty(nums: number[], k: number): number {
    const maxBoundary = Math.max(...nums) + k*2 + 2;
    
    const differenceArray: number[] = new Array(maxBoundary).fill(0);
    
    for(const num of nums){
        differenceArray[num]++;
        
        differenceArray[num+ k*2 + 1]--;
    }
    
    let maxBeauty = 0;
    let sum = 0;
    
    for(const frequency of differenceArray){
        sum += frequency;
        
        maxBeauty = Math.max(maxBeauty,sum);
    }

  return maxBeauty;
};