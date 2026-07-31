/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {

    const frequency = new Array(26).fill(0);
    

 
    for(const char of word){
        frequency[char.charCodeAt(0) - 97]++;
    }

    frequency.sort((a,b) => b - a);

    




    let pushes = 0;



    for(let i = 0;i < 26;i++){
        if(frequency[i] === 0) break;

        const pushCount = Math.floor(i/8) + 1;

        pushes += frequency[i] * pushCount;
    }

    return pushes;
};