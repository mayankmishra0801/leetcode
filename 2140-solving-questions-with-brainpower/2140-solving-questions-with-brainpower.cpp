class Solution {
public:
    long long mostPoints(vector<vector<int>>& questions) {
         int n = questions.size();
         vector<long long>dp(n+1,0);

         for(int i = n-1;i>=0;i--){
            int skip = min(n,i+questions[i][1]+1);
            long long solveProblem = questions[i][0] + dp[skip];
            long long skipProblem = dp[i+1];
            dp[i] = max(solveProblem,skipProblem);
         }

         return dp[0];
    }
};