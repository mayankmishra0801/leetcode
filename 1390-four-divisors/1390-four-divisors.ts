function sumFourDivisors(nums: number[]): number {
        const getSumIfFourDivisors = (num: number): number => {
        let divisorCount: number = 2;
        let divisorSum: number = num + 1;
      
        for (let divisor: number = 2; divisor * divisor <= num; ++divisor) {
            if (num % divisor === 0) {
                ++divisorCount;
                divisorSum += divisor;
              
         
                if (divisor * divisor !== num) {
                    ++divisorCount;
                    divisorSum += Math.floor(num / divisor);
                }
            }
        }
      
        return divisorCount === 4 ? divisorSum : 0;
    };
  
    let totalSum: number = 0;
    for (const num of nums) {
        totalSum += getSumIfFourDivisors(num);
    }
  
    return totalSum;
};