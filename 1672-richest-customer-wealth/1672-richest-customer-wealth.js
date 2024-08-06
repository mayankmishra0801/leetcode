/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
   var storeMaxValue = 0;
    for(var i = 0;i<accounts.length;i++){
        var innerArray = accounts[i];
        var sum = 0;
        
        for(var j = 0;j<innerArray.length;j++){
            sum = sum + innerArray[j];
        }
        
        storeMaxValue = Math.max(storeMaxValue,sum);
    }
    
    return storeMaxValue;
};