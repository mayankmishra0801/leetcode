class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        unordered_map<int,int> mp;

        for(int i : nums){
            mp[i]++;
        }

        while(mp[original] > 0){
            original*=2;
        }
        return original;
    }
};