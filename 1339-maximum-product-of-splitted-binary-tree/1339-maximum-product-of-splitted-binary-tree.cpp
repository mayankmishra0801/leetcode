/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int maxProduct(TreeNode* root) {
         using ll = long long;
      
        const int MOD = 1e9 + 7;
      
        ll maxProductValue = 0;
      
        function<ll(TreeNode*)> calculateTotalSum = [&](TreeNode* node) -> ll {
            if (!node) {
                return 0;
            }
          
            return node->val + calculateTotalSum(node->left) + calculateTotalSum(node->right);
        };
      
        ll totalSum = calculateTotalSum(root);
      
     
        function<ll(TreeNode*)> findMaxProduct = [&](TreeNode* node) -> ll {
            if (!node) {
                return 0;
            }
          
            ll currentSubtreeSum = node->val + findMaxProduct(node->left) + findMaxProduct(node->right);
          
       
            if (currentSubtreeSum < totalSum) {
       
                ll product = currentSubtreeSum * (totalSum - currentSubtreeSum);
                maxProductValue = max(maxProductValue, product);
            }
          
            return currentSubtreeSum;
        };
      
        findMaxProduct(root);
      
        return maxProductValue % MOD;
        
    }
};