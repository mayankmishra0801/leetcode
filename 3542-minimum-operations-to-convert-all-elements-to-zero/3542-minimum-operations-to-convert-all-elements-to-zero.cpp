class Solution {
public:
    int minOperations(vector<int>& nums) {
    //     unordered_set<int> st(begin(nums), end(nums));

    //     int n = nums.size();
    //     int ops = 0;
    //     for(int target: st){
    //         if(target == 0)
    //             continue;
            
    //         bool flow = false;
    //         for(int i = 0; i< n;i++){
    //             if(nums[i] == target){
    //                 if(!flow){
    //                flow = true;
    //                 ops++;
    //                 }
                   
                
    //         }
    //         else if(nums[i] < target){
    //             flow = false;
    //         }
            
    //     }
    // }
    // return ops;
    // }

    stack<int> st;
    int ops = 0;
    for(int i = 0;i<nums.size(); i++){
        while(!st.empty() && st.top() > nums[i]){
            st.pop();
        }
        if(nums[i] == 0)
         continue;

         if(st.empty() || st.top() < nums[i]){
            st.push(nums[i]);
            ops++;
         }
    }
    return ops;
    }
};