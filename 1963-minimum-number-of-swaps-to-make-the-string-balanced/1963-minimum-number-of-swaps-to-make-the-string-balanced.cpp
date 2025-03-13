class Solution {
public:
    int minSwaps(string s) {
         
         stack<char> st;
         for(char &ch: s){
            if(ch == '['){
                st.push(ch);
            }else if(!st.empty()){
                st.pop(); //balancing closing bracket with open bracket in stack
            }
         }

         //size of stack  = number of open bracket

         return (st.size()+1)/2;

        
    }
};