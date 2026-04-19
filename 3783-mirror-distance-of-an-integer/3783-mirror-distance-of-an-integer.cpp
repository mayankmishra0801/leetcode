class Solution {
public:
    int mirrorDistance(int n) {

        // string s = to_string(n);
        // reverse(begin(s),end(s));

        // int revInteger = stoi(s);

        // return abs(n - revInteger);

        return abs(n - getReverse(n));
        
    }

    int getReverse(int n){
        int result = 0;
        while(n){
            int lastDigit = n%10;
            result = (result * 10) + lastDigit;

            n /= 10;
        }

        return result;
    }
};