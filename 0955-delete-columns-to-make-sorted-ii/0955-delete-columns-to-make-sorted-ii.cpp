class Solution {
public:
    int minDeletionSize(vector<string>& strs) {
              if (strs.empty() || strs.size() <= 1) {
            return 0;
        }
      
        int numStrings = strs.size();
        int stringLength = strs[0].length();
        int deletedColumns = 0;
      
    
        vector<bool> sorted(numStrings - 1, false);
      
    
        for (int col = 0; col < stringLength; col++) {
           
            bool shouldDelete = false;
          
            for (int row = 0; row < numStrings - 1; row++) {
            
                if (!sorted[row] && strs[row][col] > strs[row + 1][col]) {
               
                    shouldDelete = true;
                    break;
                }
            }
          
            if (shouldDelete) {
           
                deletedColumns++;
                continue;
            }

            for (int row = 0; row < numStrings - 1; row++) {
                if (strs[row][col] < strs[row + 1][col]) {
                    sorted[row] = true;
                }
            }
        }
      
        return deletedColumns;
        
    }
};