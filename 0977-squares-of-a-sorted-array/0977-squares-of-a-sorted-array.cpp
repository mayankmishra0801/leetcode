class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
         // bruteforce tc nlogn
         // two pinter tc o(n) 


         //m-1

           for(int i = 0;i<nums.size();i++){
            nums[i] = (nums[i] * nums[i]);
           }

           sort(begin(nums),end(nums));

           return nums;

    }
};