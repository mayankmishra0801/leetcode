class Solution {
public:
    int numSub(string s) {
         
         const int M = 1e9+7;
         long long result = 0;
         long long count1 = 0;

         for(char ch : s){
            if(ch == '1'){
                count1++;
            }
            else{
                result = (result + count1*(count1 + 1)/2) % M;
                count1 = 0;

            }
         }

         result = (result + count1 * (count1 + 1)/2) % M;

         return (int)result;

    }
};