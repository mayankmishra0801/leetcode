class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
//         int count = 0;
//         int ans = 0;
//         for(int i = 0;i<nums.size();i++){
            
//             if(nums[i] == 0){
//                 count = 0;
//             } else{
//                 count++;
//                 ans = max(ans,count);
//             }
            
// }
//         return ans;
        
        
        
        int left = 0;
        int ans = -1;
        int window = 0;
        for(int right = 0;right<nums.size();right++){
            window += nums[right];
            
            while(right -left +1 != window){
                window -= nums[left];
                left++;
            }
            ans = std::max(ans,right-left+1);
        }
        
        return ans;
    }
};