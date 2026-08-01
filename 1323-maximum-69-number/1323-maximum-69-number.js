/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let digits = String(num).split("");


    for(let i = 0;i< digits.length;i++){
        if(digits[i] === "6"){
            digits[i] = "9";
            break;
        }
    }


    return Number(digits.join(""));
};