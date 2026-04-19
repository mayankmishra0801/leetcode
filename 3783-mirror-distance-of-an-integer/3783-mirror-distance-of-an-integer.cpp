class Solution {
public:
    int mirrorDistance(int n) {

        string s = to_string(n);
        reverse(begin(s),end(s));

        int revInteger = stoi(s);

        return abs(n - revInteger);
        
    }
};