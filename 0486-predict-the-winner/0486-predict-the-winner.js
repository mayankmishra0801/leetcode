/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;

    const dp = Array.from({length:n},()=>Array(n).fill(0));

    for(let i = 0;i<n;i++){
        dp[i][i] = nums[i];
    }

    for(let length =2;length <=n; length++){
        for(let left = 0;left + length - 1 < n; left++){
            const right = left + length - 1;

            const takeLeft = nums[left] - dp[left+1][right];
            const takeRight = nums[right] - dp[left][right-1];

            dp[left][right] = Math.max(takeLeft,takeRight);
        }
    }

    return dp[0][n-1] >= 0;
};