class Solution {
public:

    
        // int Operate(int a, int b, string token){
        //       if(token == "+")
        //           return a+b;
            
        //        if(token == "-")
        //           return a-b;

        //     if(token == "*")
        //         return (long)a * (long)b;
            
        //     if(token == "/")
        //        return a/b;

        //        return -1;
        // }


    int evalRPN(vector<string>& tokens) {
          stack<int> st;

          unordered_map<string,function<int (int,int)>>mp = {
               {"+",[](int a, int b){return a+b;}},
               {"-",[](int a, int b){return a-b;}}, 
               {"*",[](int a, int b){return (long)a*(long)b;}},
               {"/",[](int a, int b){return a/b;}}
          };

          for(string &token : tokens){
            if(token == "+" || token == "-" || token == "*" || token == "/"){
                  
                  int b = st.top();
                  st.pop();

                  int a = st.top();
                  st.pop();

                //   int result = Operate(a,b,token);
                  int result = mp[token](a,b);


                  st.push(result);
            }else{
                st.push(stoi(token));
            }
          }  

          return st.top();

           
       

    }
};