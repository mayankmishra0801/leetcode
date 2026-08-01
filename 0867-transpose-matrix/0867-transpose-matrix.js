/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
      

       const m = matrix.length;
    const n = matrix[0].length;

    const ans = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans[j][i] = matrix[i][j];
        }
    }

    return ans;
};