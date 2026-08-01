/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = new Set([
        'a','e','i','o','u','A','E','I','O','U'
    ]);


    let firstHalf = 0;
    let secondHalf = 0;

    const mid = s.length / 2;

    for(let i = 0;i< mid;i++){
        if(vowels.has(s[i])){
            firstHalf++;
        }
    }


    for(let i = mid;i < s.length;i++){
        if(vowels.has(s[i])){
            secondHalf++;
        }
    }


    return firstHalf === secondHalf;
};