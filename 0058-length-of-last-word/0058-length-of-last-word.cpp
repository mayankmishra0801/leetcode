class Solution {
public:
    int lengthOfLastWord(string s) {
//        int n = s.size();
        
//         int i= n-1;
        
//         while(i>=0 && s[i] == ' ')
//             i--;
        
//         int length = 0;
//         while(i>=0 && s[i] != ' '){
//             i--;
//             length++;
//         }
//         return length;
        
        int idx = s.find_last_not_of(' ') +1;
        s.erase(idx);
        int last_space_idx = s.find_last_of(' ');
        
        return last_space_idx == string::npos ? s.length() : s.length() - last_space_idx -1;
        
        
    }
};