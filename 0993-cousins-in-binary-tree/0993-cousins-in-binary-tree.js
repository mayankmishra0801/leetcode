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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    // using bfs

    const queue = [[root,null]];

    while(queue.length > 0){
        const levelSize = queue.length;

        let xParent = null;
        let yParent = null;


        for(let i = 0;i< levelSize;i++){
            const [node, parent] = queue.shift();

            if(node.val === x){
                xParent = parent;
            }

            if(node.val === y){
                yParent = parent;
            }

            if(node.left){
                queue.push([node.left,node]);
            }
           
            if(node.right){
                queue.push([node.right,node]);
            }

        }

        if(xParent !== null && yParent !== null){
            return xParent !== yParent;
        }

        if(xParent !== null || yParent !== null){
            return false;
        }
    }


    return false;
};