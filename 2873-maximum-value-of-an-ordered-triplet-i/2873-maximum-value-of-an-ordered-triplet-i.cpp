class Solution {
public:
    long long maximumTripletValue(vector<int>& nums) {
      
    //    int n = nums.size();
    //     long long result = 0;

    //    for(int i = 0;i<n;i++){
    //     for(int j = i+1;j<n;j++){
    //         for(int k = j+1;k<n;k++){
    //             long long value = (1LL*(nums[i]-nums[j])*nums[k]);
    //             result = max(result,value);
    //         }
    //     }
    //    } 
    //    return result;



    //m-2
    int n = nums.size();
    vector<int> leftMaxi(n);
    vector<int> rightMaxl(n);

    for(int j = 1;j<n;j++){
        leftMaxi[j] = max(leftMaxi[j-1],nums[j-1]);
    }

    for(int j = n-2;j>=0;j--){
        rightMaxl[j] = max(rightMaxl[j+1],nums[j+1]);
    }
    long long result = 0;

    for(int j = 1;j<n;j++){
        result = max(result,(long long)(leftMaxi[j] - nums[j])*rightMaxl[j]);
    }

    return result;


    }
};