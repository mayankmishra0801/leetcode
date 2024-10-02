class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        int n = arr.size();
        vector<int> sol(n);
        if(n==0)
            return sol;
        vector<vector<int>>z(n,vector<int>(2));
        for(int i = 0;i<n;i++){
            z[i][0] = arr[i];
            z[i][1] = i;
            
        }
        
        sort(z.begin(),z.end());
        int counter = 1;
        sol[z[0][1]] = 1;
        for(int i = 1;i<n;i++){
            if(z[i][0] == z[i-1][0])
                sol[z[i][1]] = counter;
            else{
                counter++;
                sol[z[i][1]] = counter;
            }
        }
        return sol;
    }
};