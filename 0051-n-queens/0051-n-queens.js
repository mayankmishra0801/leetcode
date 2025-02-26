/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
     let res = [];
     // create the initial board  setup with all cell empty('.');
     let board = new Array(n).fill().map(()=> new Array(n).fill('.'));


     // converts the board array of arrays into an array of strings
     function convertBoard(board){
        return board.map(row=>row.join(''));

     }
  
      // check if it is valid to place a queen at board[row][col]
     function isValid(row,col,board){
        for(let x = 0;x<row;x++){
            if(board[x][col]==='Q') return false;
        }

        // check the top-left diagonal
        for(let r = row,c = col; r>=0 && c >= 0; r--, c--){
            if(board[r][c] === 'Q') return false
        }

        for(let r = row,c = col;r>=0 && c<n;r--,c++){
            if(board[r][c] === 'Q') return false;
        }

        return true;

     }

     function positionNextQueen(board,row){
        if(row === n){
            res.push(convertBoard(board));
            return;
        }
        for(let col = 0;col<n;col++){
            if(isValid(row,col,board)){
                board[row][col] = 'Q';
                positionNextQueen(board,row+1);
                board[row][col] = '.';
            }
        }
     }
     positionNextQueen(board,0);
     return res;
};