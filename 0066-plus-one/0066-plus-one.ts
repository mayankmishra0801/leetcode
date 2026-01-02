function plusOne(digits: number[]): number[] {
        const length: number = digits.length;
  
    for (let index: number = length - 1; index >= 0; index--) {
        digits[index]++;
      
        if (digits[index] < 10) {
            return digits;
        }
      
        digits[index] = digits[index] % 10;
    }
  
 
    return [1, ...digits];
};