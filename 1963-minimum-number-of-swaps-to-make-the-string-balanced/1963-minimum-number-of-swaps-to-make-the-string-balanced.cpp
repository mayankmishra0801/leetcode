class Solution {
public:
    int minSwaps(string s) {
         
        //  stack<char> st;
        int size = 0;
         for(char &ch: s){
            if(ch == '['){
                // st.push(ch);
                    size++;
            }
            // }else if(!st.empty()){
                else if(size >0 ){
                // st.pop(); //balancing closing bracket with open bracket in stack
                size--;
            }
         }

         //size of stack  = number of open bracket

        //  return (st.size()+1)/2;

        return (size+1)/2;
        
    }
};