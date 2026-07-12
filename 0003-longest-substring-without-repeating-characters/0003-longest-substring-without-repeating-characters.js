/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let letters = new Set();

    let left = 0;
    let right = 0;

    let maxlength = 0;

    while(right < s.length){
        if(letters.has(s[right])){
            left++;
            right = left;
            letters.clear();
        }else{
            letters.add(s[right]);
            right++;
        }

        maxlength = Math.max(maxlength, right-left);
    }

    return maxlength;
};