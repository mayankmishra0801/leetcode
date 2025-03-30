/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    function recurse(root,min,max){
        if(root === null) return true;

        if(root === null ) return true;

        if((root.val >= max || root.val <= min)){
            return false;
        }

        return recurse(root.left,min,root.val) && recurse(root.right,root.val,max);
    }

    return recurse(root,-Infinity,Infinity);
    
};