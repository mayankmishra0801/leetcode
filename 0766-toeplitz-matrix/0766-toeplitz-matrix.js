/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;


    for(let i = 1;i<rows;i++){
        for(let j = 1;j<cols;j++){
            if(matrix[i][j] !== matrix[i-1][j-1]){
                return false;
            }
        }
    }


    return true;
};