/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
   let repeated = word;

   let count = 0;


   while(sequence.includes(repeated)){
    count++;

    repeated += word;
   } 

   return count;
};