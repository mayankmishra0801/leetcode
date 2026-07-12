/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;


    const count = new Array(26).fill(0);

    for(let right = 0;right < s.length;right++){
        const index = s.charCodeAt(right)-65;
        count[index]++;

        maxFreq = Math.max(maxFreq,count[index]);



        while((right-left+1)-maxFreq > k){
            count[s.charCodeAt(left)-65]--;
            left++;
        }

        maxLen = Math.max(maxLen,right-left+1);
    }

    return maxLen;
};