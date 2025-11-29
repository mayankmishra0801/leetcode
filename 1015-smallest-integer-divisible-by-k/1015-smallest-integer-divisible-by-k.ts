function smallestRepunitDivByK(k: number): number {
          let remainder: number = 1 % k;
  

    for (let length: number = 1; length <= k; length++) {
      
        if (remainder === 0) {
            return length;
        }
      
   
        remainder = (remainder * 10 + 1) % k;
    }

    return -1;
};