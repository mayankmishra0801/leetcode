class MinStack {

  std::  stack<int> st;
   std::  stack<int> minSt;
public:
    MinStack() {

        // st =  new Stack();
        // minSt = new Stack();
        
    }
    
    void push(int val) {

          st.push(val);
          if(minSt.empty() || minSt.top() > val){
            minSt.push(val);
          }else{
            minSt.push(minSt.top());
          }

        
    }
    
    void pop() {

            st.pop();
            minSt.pop();
        
    }
    
    int top() {

      return  st.top();
        
    }
    
    int getMin() {

         return minSt.top();
        
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */