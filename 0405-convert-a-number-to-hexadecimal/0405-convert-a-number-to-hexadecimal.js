/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  

    if(num === 0) return "0";

    const hex = "0123456789abcdef";

    let result = "";

    while(num !== 0){
        result  = hex[num & 15] + result;
        num = num >>> 4;
    }

    return result;
};