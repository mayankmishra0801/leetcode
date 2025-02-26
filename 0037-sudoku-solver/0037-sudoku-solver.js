/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    function isValid(board,row,col,num){
        for(let x = 0;x<9;x++){
            if(board[x][col] === num || board[row][x] === num){
                return false;
            }
            let r = 3*Math.floor(row/3) + Math.floor(x/3);
            let c = 3*Math.floor(col/3) + x % 3;
            if(board[r][c] === num){
                return false;
            }
        }
        return true;
    }

    function helper(board){
        for(let row = 0;row < 9;row++){
            for(let col = 0;col<9;col++){
                if(board[row][col] === '.'){
                    for(let num = 1;num<=9;num++){
                        let char = num.toString();
                        if(isValid(board,row,col,char)){
                            board[row][col] = char;
                            if(helper(board)){
                                return true;
                            }
                            board[row][col] = "."
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    helper(board)
};