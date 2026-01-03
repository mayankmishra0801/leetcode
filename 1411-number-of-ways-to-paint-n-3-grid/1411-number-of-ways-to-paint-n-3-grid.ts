function numOfWays(n: number): number {
        const MOD: number = 10 ** 9 + 7;
  
    let twoColorPattern: number = 6;
  
    let threeColorPattern: number = 6;

    for (let columnIndex = 1; columnIndex < n; columnIndex++) {
      
        const nextTwoColorPattern: number = (3 * twoColorPattern + 2 * threeColorPattern) % MOD;
      
        const nextThreeColorPattern: number = (2 * twoColorPattern + 2 * threeColorPattern) % MOD;
      
        twoColorPattern = nextTwoColorPattern;
        threeColorPattern = nextThreeColorPattern;
    }

    return (twoColorPattern + threeColorPattern) % MOD;
};