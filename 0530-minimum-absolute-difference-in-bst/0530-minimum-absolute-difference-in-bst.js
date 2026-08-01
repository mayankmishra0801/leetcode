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
var getMinimumDifference = function(root) {
    let previous = null;

    let minimumDifference = Infinity;

    function inorder(node){
        if(node === null) return;


        inorder(node.left);

        if(previous !== null){
              
                minimumDifference = Math.min(
                    minimumDifference,

                    node.val - previous
                );



        }


        previous = node.val;
        inorder(node.right);
    }


    inorder(root);


    return minimumDifference;
};