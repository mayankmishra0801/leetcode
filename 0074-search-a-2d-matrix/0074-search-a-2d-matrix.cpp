class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        //if sorted think of bs
        
        // mid/no of col and mid%no of rows
        
//         int m = matrix.size();
//         int n = matrix[0].size();
        
//         int i = 0,j=n-1;
//         while(i <m && j >= 0){
//             if(matrix[i][j] >target){
//                 j--;
//             }else if(matrix[i][j]<target){
//                 i++;
                
//             }else{
//                 return true;
//             }
//         }
//         return false;
        
         
        int m = matrix.size();
        int n = matrix[0].size();
        
        int start = 0;
        int end = m*n-1;
        
        while(start <= end){
            int mid  = start + (end-start)/2;
            
            // int row = mid/n;
            // int col = mid%n;
            
            
            if(matrix[mid/n][mid%n] > target){
                end = mid-1;
                
            }else if(matrix[mid/n][mid%n]<target){
                start = mid+1;
            }else{
                return true;
            }
        }
        
        return false;
        
        
        
    }
};