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
var isSymmetric = function(root) {
    // if(!root) return true;

    // const isMirror = (t1,t2) =>{
    //     if(!t1 && !t2) return true;
    //     if(!t1 || !t2) return false;

    //     return (
    //         t1.val === t2.val &&

    //         isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
    //     );
    // };

    // return isMirror(root.left, root.right);




function mirror(left,right){
    if(!left && !right) return true;

    if(!left || !right) return false;


    return left.val === right.val && mirror(left.left,right.right) && mirror(left.right,right.left);
}

return mirror(root.left,root.right);

};