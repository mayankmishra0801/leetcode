/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let start = rounds[0];
    let end = rounds[rounds.length - 1];

    let result = [];


    if(start <= end){
        for(let i = start; i <= end;i++){
            result.push(i);
        }
    }
    else{
        for(let i = 1;i<=end;i++){
            result.push(i);

        }for(let i = start;i<=n;i++){
            result.push(i);
        }
    }

    return result;
};