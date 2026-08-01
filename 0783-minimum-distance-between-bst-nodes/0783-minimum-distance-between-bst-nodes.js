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
 * @return {number}
 */
var minDiffInBST = function(root) {
     let  previous  = null;

     let minimum = Infinity;


     function inorder(node){
        if(node === null) return;

        inorder(node.left);

        if(previous !== null){
            minimum = Math.min(minimum,node.val - previous);
        }

        previous = node.val;

        inorder(node.right);
     } 


     inorder(root);

     return minimum;
};