class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        // tc o(n)
        // sc o(1)

        int n = nums.size();
        int l = 0, r = 0;
        while(r<n){
            if(nums[r]!= 0){
                swap(nums[l],nums[r]);
                l++;
            }
            r++;
        }



        
    }
};