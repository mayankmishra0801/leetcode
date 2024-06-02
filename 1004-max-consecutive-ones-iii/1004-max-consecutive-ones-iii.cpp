class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int left = 0;
        int ans = 0;
        int window = 0;
        
        int n = nums.size();
        
        for(int right = 0;right <n;right++){
            window = window + nums[right];
            while(window+k<right-left+1){
                window = window-nums[left];
                left++;
            }
            ans = std::max(ans,right-left+1);
        }
        return ans;
    }
};