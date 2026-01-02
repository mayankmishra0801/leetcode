/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
            const length = digits.length;
  
    for (let index = length - 1; index >= 0; index--) {
        digits[index]++;
      
        if (digits[index] < 10) {
            return digits;
        }
      
        digits[index] = digits[index] % 10;
    }
  
 
    return [1, ...digits];
    
};